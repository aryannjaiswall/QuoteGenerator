function displayQuote() {
       let quote;
       let author;
       
       fetch("https://type.fit/api/quotes")
         .then((response) => response.json()) // Getting the raw JSON data
         .then( (data) => {
           // Storing the quotes internally upon
           // successful completion of request
           this.data = data;
       
           // Displaying the quote When the Webpage loads
           var index = Math.floor(Math.random() * data.length);
       
           quote = data[index].text;
           author = data[index].author;
           
            //console.log(quote)
           document.getElementById("text").innerHTML = quote;
           document.getElementById("author").innerHTML = author;
           //displayQuote();    
         });  
}
