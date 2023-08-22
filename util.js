export const setFormDefaultDataByConfigList = (configList, formData) => {
    formData = formData || {};

    configList.forEach((config) => {
        if (!config.key) {
            return;
        }

        if (typeof formData[config.key] !== 'undefined') {
            return;
        }

        if (typeof config.default === 'function') {
            formData[config.key] = config.default();
        } else if (typeof config.default !== 'undefined') {
            formData[config.key] = config.default;
        } else {
            formData[config.key] = null;
        }
    });

    return formData;
};

export const notNullValue = (value) => {
    return typeof value !== 'undefined' && value !== null;
};

export const filterDataInConfig = (formData, configs) => {
    const out = {};

    configs.forEach((item) => {
        const key = typeof item === 'string' ? item : item.key;

        out[key] = formData[key];
    });

    return out;
};
