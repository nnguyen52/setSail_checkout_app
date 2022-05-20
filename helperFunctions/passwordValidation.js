export const validatePassword = (password) => {
  const errors = [];
  // check length between 6 - 40
  if (password.toString().length < 6 || password.toString().length > 40) {
    errors.push("Password must be between 6 & 40 characters");
  }
  if (password.split("").includes(" ")) {
    // check containing space
    errors.push("Password must not contain spaces");
  }
  // check containing special characters
  if (/[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/.test(password)) {
    errors.push("Password must not contain special characters");
  }
  if (errors.length == 0) return null;
  return errors;
};
