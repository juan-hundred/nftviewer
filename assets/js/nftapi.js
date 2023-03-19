
function getNft() {
  
  let shUrl = `https://api.nftport.xyz/v0/nfts/0x8dC7b6EC6FafA36085EE9ec8e39112428D3360aa?chain=ethereum&page_number=1&page_size=50&include=metadata&refresh_metadata=false`;
  let userWallet = document.getElementById('wallet').value;
  if(userWallet == ''){ alert('Wallet address missing'); return false;}
  let userUrl = `https://api.nftport.xyz/v0/accounts/${userWallet}?chain=ethereum&page_size=50&include=metadata`;
  const targetDiv = document.getElementById('result');


  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: '7fd4440e-2fc4-4ed3-87cc-4bc2bc735dd1'
      }
    };
    
    fetch(userUrl, options)
      .then(response => response.json())
      .then(response => {console.log(response);
          const nfts = response.nfts;
          let result = `<ul>`;
          nfts.forEach(e => {
              if (e.name != null && e.cached_file_url != null) {result += `<li class="card-img"><img src="${e.cached_file_url}" loading="lazy" alt="" width="200" height="200"></li>`;} 
          }); 

          result += `</ul>`;
          targetDiv.innerHTML = result;
          userWallet.value = '';


      }
          )
      .catch(err => console.error(err));

      return false;
}

function clearPage(){
document.getElementById('result').innerHTML = '';
document.getElementById('wallet').value = '';

return false;
}