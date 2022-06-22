nolwenturetask

Write a small Node.js application that does following:
  - Listens to an HTTP GET request at port 8123
  - Returns an HTML page to any GET request coming in (i.e. “you can ignore path”)
  - HTML page has
    * DIV that contains text “click”
    * DIV that has class “table”
    * CSS to layout the div with text to look bit like a button (and to layout data presented later).
    * JavaScript that will be called when clicking div with text “click”
    * JavaScript makes an HTTP POST request to Node.js to request data
    * Adds the data to div with class “table” as a single new row. (CSS should layout it to look bit like a table)
    * Listens to an HTTP POST request also at port 8123
  - When receiving request reads a binary file (binary.dat included in the zip)
  - Parses from the file (Binary format documentation included in the zip)
    * “Model number”
    * “Serial number”
    * Does it support “48-bit Address feature set”
    * “Total number of user addressable logical sectors”, which should be converted to size of the disk (each sector is 512 bytes).
  - Returns parsed data in JSON format


Steps to achieve:

- basic setup: index.html, index.js, app.js
- components: button, table
- HTTP GET ?
- Button: on click request data
- parse received data
  - binary shenanigans
- send to Table
- Table: present data


delete later:
google search: nodejs react http get
find explanation:
callback
fetch

about file reading
https://nodejs.dev/learn/reading-files-with-nodejs