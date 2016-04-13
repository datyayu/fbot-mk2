import generateElement from './element';


export default function generateGeneric(results) {
  return {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'generic',
        elements: results
          .filter(result => result.link !== null)
          .map(result => generateElement(result)),
      },
    },
  };
}
