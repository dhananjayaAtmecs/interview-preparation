// JavaScript program to count the uppercase,
// lowercase, special characters
// and numeric values

// Function to count uppercase, lowercase,
// special characters and numbers
      function Count(str)
      {
        var upper = 0,
          lower = 0,
          number = 0,
          special = 0;
        for (var i = 0; i < str.length; i++)
        {
          if (str[i] >= "A" && str[i] <= "Z") upper++;
          else if (str[i] >= "a" && str[i] <= "z") lower++;
          else if (str[i] >= "0" && str[i] <= "9") number++;
          else special++;
        }
        return `upper case- ${upper}, lower case-${lower}, numbers-${number}, speshal charecters-${special}`
      }
 
      // Driver function
      var str = "#GeeKs01fOr@gEEks07";
     console.log( Count(str) )  
       