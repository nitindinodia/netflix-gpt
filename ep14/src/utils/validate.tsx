export const checkValidData = (email, password, name) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    // const isNameValid = /^([A-Za-z]{3,16})(\s[A-Za-z]{3,16}){0,3}$/.test( name === null ? name.trim(): name );

    const isNameValid = name === null ? true : /^([A-Za-z]{3,16})(\s[A-Za-z]{3,16}){0,3}$/.test(name.trim());

    if (!isNameValid) return 'name not valid';

    if (!isEmailValid) return 'email not valid';

    if (!isPasswordValid) return 'password not valid';

    return null;
};
