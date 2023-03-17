import { descriptions } from '../resources/info/descriptions';

export const getDescriptionsByIds = (ids) => {
    return descriptions.filter((description) => ids.includes(description.id));
};
