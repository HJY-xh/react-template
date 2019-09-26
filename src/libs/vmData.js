import faker from 'faker';

faker.locale = 'zh_CN';
export default {
  getUUID() {
    return faker.random.uuid();
  },
};
