import Axios from 'axios';

const getPredictions = async (image) => {
  let data = new FormData();
  data.append('file', {
    uri: image.uri,
    name: image.fileName,
    type: image.type,
  });

  try {
    const response = await Axios.post(
      'https://dr-ai-server-rkdbbib34a-nw.a.run.app/analyze',
      data,
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default getPredictions;
