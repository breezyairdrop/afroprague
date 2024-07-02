function fetchDatabase() {

    if (location.search.includes("search")) {
        fetch(
            "https://geoglqji.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22reservation%22%5D"
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data?.result)
      
              for (let i = 0; i < data?.result.length; i++) {
                  if (data?.result[i]?.id === location.search.slice(8)) {
                    //   console.log("here")
                      onGenerateSubmit(data?.result[i]?.link)
                  }
              }
              // if (data?.result?.name == "shet") {
              //     console.log("here")
              //     onGenerateSubmit(data?.result?.link)
              // }
            })
            .catch(console.error);
        // console.log('me')
        
    }

  }
  

//   string = 'skoz0VXNcbiR61J69Qz2em1pu2I7FAkjahggEDVZ6FfzWyBgbJBxjZ5nDffodOqCF5H08hBF6hSqKry1ymnWPfwCDoTegYrLwKdF2BR47cwwSoE77iRewWCXnHWDg4yavuI9l695OA9Wm9TnKzwftddjmXb1gOqlDZxbk1jLT9tEuSNfVq3k'

  function saveData() {
    let id = Math.random().toString().slice(2);
    let name = document.getElementById('Name').value
    let email = document.getElementById("Email").value
    let numberOfGuests = document.getElementById('Number-of-Guests').value
    let time = document.getElementById("Time").value
    let date = document.getElementById("Date").value
    let message = document.getElementById("Message").value
    let link = location.host + `/reservation/index.html?search=${id}`
    // console.log("here")

    console.log(id, name, email, numberOfGuests, time, date, message, link)
}


//   let id = Math.random().toString().slice(2);
  const qr = document.getElementById("qrcode");


document.getElementById("qrcode-form").style.display = "none";
const onGenerateSubmit = (link) => {
    document.getElementById("wf-form-Form").style.display = "none";
    document.getElementById("qrcode-form").style.display = "block";


    // const qr = document.getElementById("qrcode");

    const url = link;
    const size = "300";
    // const saveUrl = qr;

    if (url === "") {
        alert("Please enter a URL");
    } else {
        generateQRCode(url, size);
    }

    let moreData = `
    <div id="invoice-POS">
      
      <center id="top">
        <div class="logo"></div>
        <div class="info"> 
          <h2>Afro Prague</h2>
        </div><!--End Info-->
      </center><!--End InvoiceTop-->
      
      <div id="mid">
        <div class="info">
          <h2>Contact Info</h2>
          <p> 
              Address : street city, state 0000</br>
              Email   : JohnDoe@gmail.com</br>
              Phone   : 555-555-5555</br>
          </p>
        </div>
      </div><!--End Invoice Mid-->
      
      <div id="bot">
  
                      <div id="table">
                          <table>
                              <tr class="tabletitle">
                                  <td class="item"><h2>Item</h2></td>
                                  <td class="Hours"><h2>Qty</h2></td>
                                  <td class="Rate"><h2>Sub Total</h2></td>
                              </tr>
  
                              <tr class="service">
                                  <td class="tableitem"><p class="itemtext">Communication</p></td>
                                  <td class="tableitem"><p class="itemtext">5</p></td>
                                  <td class="tableitem"><p class="itemtext">$375.00</p></td>
                              </tr>
  
                              <tr class="service">
                                  <td class="tableitem"><p class="itemtext">Asset Gathering</p></td>
                                  <td class="tableitem"><p class="itemtext">3</p></td>
                                  <td class="tableitem"><p class="itemtext">$225.00</p></td>
                              </tr>
  
                              <tr class="service">
                                  <td class="tableitem"><p class="itemtext">Design Development</p></td>
                                  <td class="tableitem"><p class="itemtext">5</p></td>
                                  <td class="tableitem"><p class="itemtext">$375.00</p></td>
                              </tr>
  
                              <tr class="service">
                                  <td class="tableitem"><p class="itemtext">Animation</p></td>
                                  <td class="tableitem"><p class="itemtext">20</p></td>
                                  <td class="tableitem"><p class="itemtext">$1500.00</p></td>
                              </tr>
  
                              <tr class="service">
                                  <td class="tableitem"><p class="itemtext">Animation Revisions</p></td>
                                  <td class="tableitem"><p class="itemtext">10</p></td>
                                  <td class="tableitem"><p class="itemtext">$750.00</p></td>
                              </tr>
  
  
                              <tr class="tabletitle">
                                  <td></td>
                                  <td class="Rate"><h2>tax</h2></td>
                                  <td class="payment"><h2>$419.25</h2></td>
                              </tr>
  
                              <tr class="tabletitle">
                                  <td></td>
                                  <td class="Rate"><h2>Total</h2></td>
                                  <td class="payment"><h2>$3,644.25</h2></td>
                              </tr>
  
                          </table>
                      </div><!--End Table-->
  
                      <div id="legalcopy">
                          <p class="legal"><strong>Thank you for your business!</strong>  Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices. 
                          </p>
                      </div>
  
                  </div><!--End InvoiceBot-->
    </div><!--End Invoice-->
  `

  document.getElementById("more-data").innerHTML = moreData;

//   document.getElementById("htmlContent").appendChild(moreData)


  var element = $("#htmlContent");
//   element.appendChild(moreData)
    html2canvas(element, {
        onrendered: function(canvas) {
          var imageData = canvas.toDataURL("image/jpg");
          var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
          $("#download").attr("download", "image.jpg").attr("href", newData);
        }
      });

    // qr.querySelector("canvas").appendChild(moreData)

    // const saveUrl = qr.querySelector("canvas").toDataURL();
    // qrcode

        // Create save button
    // createSaveBtn(saveUrl);
};

// Generate QR code
const generateQRCode = (url, size) => {
    const qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size,
    });
};

const createSaveBtn = (saveUrl) => {
    const link = document.createElement("a");
    link.id = "save-link";
    link.classList =
      'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.innerHTML = "Save Image";
  
    link.href = saveUrl;
    link.download = "qrcode.png";
    const qr = document.getElementById("qrcode");
  
    qr.appendChild(link);
  };


  $(document).ready(function(){
    fetchDatabase()

    // https://afroprague.sanity.studio/
  });