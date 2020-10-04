const caesar = function(string, shift) {
  // Find charcode from A to Z = 65 to 90
    // Find charcode from a to z = 97 to 122
    return string.split('').map(char => shiftChar(char, shift)).join('');
  };

  const codeSet = code => (code < 97 ? 65 : 97);
  const mod = (n, m) => (n % m + m) % m;
  const shiftChar = (char, shift) => {
    const code = char.charCodeAt();

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    // mod(90 + 1 - codeSet(90), 26) + codeSet(90)
    // mod(91 - 65, 26) + 65
    // mod(26, 26) + 65
      // mod(26, 26) = (26 % 26 + 26) % 26
      // (0 + 26) % 26
      // 26 % 26
      // 0
    // 0 + 65
    // 65
      return String.fromCharCode(mod(code + shift - codeSet(code), 26) + codeSet(code));
    }
    return char;
  };

  caesar('Aaa', 1);
  caesar('Hello, World!', 5);
  caesar('Mjqqt, Btwqi!', -5);
  caesar('Z', 1);
  caesar('Hello, World!', 75);
  caesar('Hello, World!', -29);

module.exports = caesar
