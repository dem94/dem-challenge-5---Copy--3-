document.addEventListener('DOMContentLoaded', function() {
  const characterSets = {
    special: "@%+\\/!#$^?:,)(}{][~-_.",
    numeric: "0123456789",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  };

  function getPasswordOptions() {
    const length = parseInt(prompt('Enter the length of the password (between 8 and 128 characters)'));

    if (isNaN(length) || length < 8 || length > 128) {
      alert('Please enter a valid password length between 8 and 128.');
      return;
    }

    const includeLowercase = confirm('Include lowercase characters?');
    const includeUppercase = confirm('Include uppercase characters?');
    const includeNumeric = confirm('Include numeric characters?');
    const includeSpecial = confirm('Include special characters?');

    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert('Please select at least one character type.');
      return;
    }

    return {
      length,
      includeLowercase,
      includeUppercase,
      includeNumeric,
      includeSpecial,
    };
  }

  function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  function generatePassword() {
    const options = getPasswordOptions();

    if (!options) {
      return '';
    }

    let availableCharacters = '';

    if (options.includeLowercase) {
      availableCharacters += characterSets.lowerCase;
    }
    if (options.includeUppercase) {
      availableCharacters += characterSets.upperCase;
    }
    if (options.includeNumeric) {
      availableCharacters += characterSets.numeric;
    }
    if (options.includeSpecial) {
      availableCharacters += characterSets.special;
    }

    let generatedPassword = '';
    for (let i = 0; i < options.length; i++) {
      const randomCharacter = getRandom(availableCharacters);
      generatedPassword += randomCharacter;
    }

    return generatedPassword;
  }

  const generateBtn = document.querySelector('#generate');

  function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector('#password');

    passwordText.value = password;
  }

  generateBtn.addEventListener('click', writePassword);
    
  document.addEventListener('DOMContentLoaded', function() {
  
    window.confirm = function(message) {
      const modifiedMessage = message.replace('Ok', 'Yes').replace('Cancel', 'No');
      return confirm(modifiedMessage);
    };
  });
  
  document.getElementById('customConfirmBtn').addEventListener('click', function() {
    const customDialog = document.getElementById('customDialog');
    customDialog.style.display = 'block';
  
    document.getElementById('yesBtn').addEventListener('click', function() {
      console.log('User clicked Yes!');
      customDialog.style.display = 'none';
    
    });
  
    document.getElementById('noBtn').addEventListener('click', function() {
      console.log('User clicked No.');
      customDialog.style.display = 'none';
    });
  });
  
  
});
