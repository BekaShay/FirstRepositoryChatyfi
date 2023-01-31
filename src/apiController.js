import {API} from './client';
import {Urls} from './Urls';

class ContactController {
  static get = async params => {
    return await API.get(Urls.ContactDataUrl, params);
  };
}

class ContactAlbumsController {
  static get = async params => {
    return await API.get(Urls.ContactAlbumsUrl, params);
  };
}

class ContactPhotosController {
  static get = async params => {
    return await API.get(Urls.ContactPhotosUrl, params);
  };
}

export {ContactController, ContactAlbumsController, ContactPhotosController};
