export function setUserData(userData) {
    localStorage.setItem("userData", JSON.stringify(userData));
};

export function getUserData() {
    return JSON.parse(localStorage.getItem("userData"));
};

export function clearUserData() {
    return localStorage.removeItem("userData");
};

export function createSubmitHandler(callback, ...fields) {
    return function (event) {
        event.preventDefault();
        let formData = new FormData(event.target);

        
        let data = fields.reduce((acc, c) => Object.assign(acc, { [c]: formData.get(c).trim() }), {});

        callback(data, event);
    }
};

