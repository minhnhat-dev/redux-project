import faker from 'faker';

export const randomPhoto = () => {
    const id = faker.random.uuid();
    const fileName = faker.system.commonFileName();
    console.log('{ id, fileName }', { id, fileName });
    return { id, fileName };
};
