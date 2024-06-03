export default function generatePassword(length, options) {
    const characterSets = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
    };

    let allCharacters = '';
    if(options.uppercase) allCharacters += characterSets.uppercase;
    if(options.lowercase) allCharacters += characterSets.lowercase;
    if(options.numbers) allCharacters += characterSets.numbers;
    if(options.symbols) allCharacters += characterSets.symbols;

    let password = '';
    if(allCharacters !== '') {
        for(let i=0; i<length; i++) {
            const randomIndex = Math.floor(Math.random() * allCharacters.length);
            password += allCharacters[randomIndex];
        }
    }
    return password;
}

