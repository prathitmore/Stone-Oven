export const getAssetPath = (path) => { 
    const cleanPath = path.startsWith('/') ? path.slice(1) : path; 
    return '/Stone-Oven/' + cleanPath; 
};
