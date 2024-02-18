function doGet() {
    return HtmlService.createHtmlOutputFromFile('Index');
}

function generateSlideFromPrompt(prompt) {
    const API_KEY = "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";
    const MODEL_TYPE = "gpt-4"; //chatGPT model
    const presentation = SlidesApp.create(prompt.substring(0, 100)); // Use the prompt for the filename, limited to 100 characters to avoid errors
    const slide = presentation.getSlides()[0]; // Get the first slide that's automatically created with the presentation
    
    // Set the title of the first slide to the prompt
    const titleShape = slide.getShapes()[0]; // Assuming the first shape is the title box
    titleShape.getText().setText(prompt);

    const temperature = 0;
    const maxTokens = 2060;

    const requestBody = {
        model: MODEL_TYPE,
        messages: [{role: "user", content: "Generate 3 points on " + prompt}],
        temperature,
        max_tokens: maxTokens,
    };

    const requestOptions = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_KEY,
        },
        payload: JSON.stringify(requestBody),
        muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", requestOptions);
    const responseText = response.getContentText();
    const json = JSON.parse(responseText);
    const generatedText = json['choices'][0]['message']['content'];

    // Split the generated text into paragraphs
    const paragraphs = generatedText.split('\n').filter(paragraph => paragraph.trim() !== '');

    // Create a new slide for each paragraph
    paragraphs.forEach(paragraph => {
        const newSlide = presentation.appendSlide();
        newSlide.insertTextBox(paragraph, 10, 10, 600, 400); // Adjust the position and size as needed
    });

    // Return the URL of the presentation for further use
    return presentation.getUrl();
}


async function getImageUrl(prompt = "bananas") {
  // Your Google Custom Search Engine API Key
  var apiKey = 'AIzaSyB5wsY8ezEnDPNgljx3WIkETMNTPdzFvpI';

  // Your Google Custom Search Engine ID
  var cx = '391002711010-7crsim0jjpci3kd66dqr1m03ta5gjsq8.apps.googleusercontent.com';

  // Base URL for Google Custom Search Engine
  var baseUrl = 'https://www.googleapis.com/customsearch/v1';

  // Construct the URL for the API request
  var url = baseUrl + '?key=' + apiKey + '&cx=' + cx + '&searchType=image&q=' + encodeURIComponent(prompt);

  // Fetch images from Google Custom Search Engine
  var response =  UrlFetchApp.fetch(url, {muteHttpExceptions: true});
  var data = JSON.parse(response.getContentText());

  // Extract the image URL from the response
  var imageUrl = response.items[0].link;

  // Return the image URL
  return imageUrl;
}

async function exampleUsage() {
  try {
    var imageUrl = await getImageUrl();
    console.log('Image URL:', imageUrl);
    // Now you can use the imageUrl in your code
  } catch (error) {
    console.error('Error:', error);
    // Handle errors
  }
}



