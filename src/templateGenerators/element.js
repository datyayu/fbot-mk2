export default function generateElement(result) {
  return {
    title: result.title,
    subtitle: result.link,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png',
    buttons: [
      {
        type: 'web_url',
        title: 'Open in browser',
        url: result.link,
      },
      {
        type: 'postback',
        title: 'Show me here',
        payload: result.link,
      },
    ],
  };
}
