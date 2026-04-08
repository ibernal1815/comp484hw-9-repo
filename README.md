# Homework 9 - JavaScript Mini Demo
 
## Built-in Objects and Methods Used
 
- Date, getMonth(), getDate(), getFullYear()
- Number(), Number.isNaN(), Number.isInteger()
- toFixed(), toLocaleString()
- typeof
 
## GitHub Pages Link
 
https://ibernal1815.github.io/comp484hw-9-repo/
 
## Screenshots

<img width="1910" height="962" alt="Screenshot 2026-04-07 174221" src="https://github.com/user-attachments/assets/7b031611-ce55-4e74-9c27-3fda98864c03" />
<img width="963" height="301" alt="image" src="https://github.com/user-attachments/assets/1608f604-9f52-4daa-8672-997d22396f86" />
 
## Reflection
 
The easiest part was Part 1 because getting the date was pretty simple once I figured out that getMonth() starts at 0 instead of 1, so you have to add 1 to get the right month. Part 2 was probably the hardest because I had to write out the same steps four times without using a loop, which made the code a lot longer than I expected. I learned that the Date object stores months starting from 0, so January is 0 and December is 11, which is easy to forget. With the Number object I learned that passing a string that cannot be converted just silently gives you NaN instead of throwing an error, so you always need to check with Number.isNaN() if you want to catch bad input. For displaying results I found out that textContent is good for plain text but if you want to use HTML tags like p or strong in your output you need to use innerHTML instead.
 
## Sources
 
- MDN Web Docs - Date object
- MDN Web Docs - Number object
- Class lecture slides
 
