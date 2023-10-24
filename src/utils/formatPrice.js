export const formatPrice = (price) => {
    const prix = (price + '').split('');
    prix.splice(2, 0, ' ').join('');
    return prix.map((el) => el).join('');
};
