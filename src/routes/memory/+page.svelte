<script>
   let cards=[]
   for (let i = 0; i <= 11; i++) {
      cards.push({image: "favicon.png", flipped:false, matched:false});
   }
   let bluepoints=0;
   let redpoints=0;
</script>

<h1>Memory</h1>
<main>
   
   {#each cards as cardnr,i}
      <div class="card"> <img class=front alt="card{i}f" src="{cardnr.image}"> <img class=back alt="card{i}b"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADc3NylpaV0dHSGhobo6OhLS0swMDDCwsJhYWG0tLTPz8/09PSWlpbZ2dn5+fnu7u7h4eG9vb2enp5+fn6srKw9PT1ERERXV1fS0tJtbW0kJCSTk5MWFhZ6enosLCxmZmYQEBAbGxtAQECLi4tKSkpTU1MvLy84ODhoVXi4AAAKg0lEQVR4nO2da1vqOhCFURRB7leRi4DKdvv//+B5dmfi05WzHJKCijrrW5tJmrdo0mQmSa3mcrlcrhNp0L/MFpYwLErod62nDPuQc3T4Gf0B5sxQA5/dv8gXljCTmx2LUG0e9PIu4SFaz0l+9Zb47Mv8EiLCttw0CdWmqZc3CQ9Rwnp+9a6c8LCc0Am/G+FYbpqEavOqlxlt6ekIrfoFtdD2FsrtoE1K7am6lPAmpX7XTuiETuiE34/wHmq9yCAcGg8ZfDBh+5poOqKEnVahvdxciu1ObTSxBTZBGym2hVVZy12TcM3qt8khvKbvPPoLxBLaNEuKTR2NVpDICVekmLjy50vYTCBskmKc0Amd8CcT9jv/tFjLzdurQvfUZrYsEpdY7PWiU1J/W9x82BSmu+EZEJo9Ptr05GpwcVhhlFw7A0Lzqw1tlLB7cVhO6IRO6IRl2xew4W3pTq4meplAGObjzoEQpX3d1GJ5xCwzi/QcenzUlaRdW4T8L9AJndAJfxvhlJZwKsInzFKhLX06mnDUYepSwp6MiNqUkJbTkUGUaqNOtrt+2SQ8hBMuaLE5hKb498qaElLx0dMNtTmHGWH8Iksh5F9tN9TGCYmc8LCc8CAhb2nmYPNhhK0ErTMIx0WOsfYzDb0UT8pevQ/3++JyLaWPBwbha+e9SpW0MwlzlEKopn250vnS0ONrRziTq6Hadg3CHH0u4SUQRvE0OiPccEIndEIn/O6EH6UMwqDH4mY0H3e+qkDYBJuzlxM64fnLCf9phlkeipsPtRNr9HJ7UPc6QujcHzYNvwslfNwVRjudE3yWPMGZg2uOplLeWK6GUs0XHY3NpCZ7tdVn81DzpB4/I7LS7PG55rRic0mkXwW1EP+BD2vRgs6AkI/fre+eWs8JnfBHESatP8yIcI683DhPw5XS0oS5nAEQ3qcQDte9kiYafTCfyKVmXbcLzdQqwMiVOvA3xcVaW/faXi6HQPikxUoE28VtcbkOHcy4XZaY9upyFQZRM72U0kOHqvXSRHN9Uk0DskPkNL7s6C9wBLVfWMUm9fjoOcPIvUht+hSdL13SxMgoDCJNQvwfq7B2LSP6MofQHgE7oRN+G8Lwz4rl7vEu9gQpKywrtDTc1x/lVE2x8pGu1CkvjvLwgY/l3kmA8tUCvPtIuABXffDYayekEc4b9czcyGV4ceCjX1wbvv4OX1akQQiXNPGdTpO+QHMdcNK6J5TZ46uSvGu2vpDQ/GpzQid0wgzCnBWWqJSWhtskqSse9paupexj6oYtaIyCEZRwgr7+fTnDHkPCL7DYECIdBQ2ADfr6a5dS6w7kHPPFt2F8WP0dpax7GmMi785oj69CX3+YiYrGh+MaU060SXXCyIa/bPrVpjrBLIYTOqETOuHHEdbQiNdzl1D74L1BG1w5xBXWATXhylQPS0jJYhNeJRCmrP7iwjj8JP+hEzqhE/5AwqVVILal5op2ruevINzJ/puje3WmW7t7KqHGA6x1507N2YKMC3zKXmw1PGD3CIRTiA8ILq2lFDvDnUA1sS4F9VIIoxnhlNleFZ81VkWR7JFv8AII+QhYvVZVZoQ/hTBajWAS8lmMphM64e8hjHzAKf5dVeTHz29pVmrLZ/VXFqHtmcFnv6hPfQ0OctRM54r65UiAyI8f5QyOJHXyd5BQywE//kQ/GV61Qj3w7odi9ZnjooQ1x8/q8VV9XhKI9/g4jxYIZaZwgDaRdw1jMaJq2jIJr2jiO14sEP9qs0a3diQ7joCd0Amd8LsQdgsFwlWz0DZkLRIH023z/3paSNaBUexgKTmjDR0vIWfjsbB5TCFsSMbeqlyTx65Vkyhyr0Pv8h5fe4I9TdScGhkWeWZUE5YxaVVQ1OXpXdszo9Ipxw7e5V9tuO6JE5rRl3WW8QjCpPhSJ3RCJ/wCwqjVHFNC/o2thLRFPBkhP4Ulpy0dNEADuBuedndT0p8wVlPCbTlxHu3MxgkXRenD+rwoLxrPaU0CsFyFWbpLyTmZlx96h5XPEn2B5mxvUqw+/gX+SagI965FFaqiTyFMiQZyQid0wuqEuCYjCNdSPMdPJeJrZpIIh5P6P73FltUThIS3s3/3ZjdIOClnmOkA82nGigudGyRO9NdaSEEBCYqt75FQKx91/FFcW7QjnflysMffIKEK59oir0vKyQFmjz+ilX/n3DW9jHYVTCE0d1HCv+RTr0bglc/aN9EJnfDXEW5Nwi3YfhShfrTf4V3VAD/7tfb7YfG5HxZaDstDleHmT3lUciuJQ96W3pZtX8PazGcZs2iFxOR5bFR+Hk2N8cg9Hhs9xrspkSQjfEWYSMeHXKHHT6l8LcWoQ+9WiJVJ8ZCmKPpqc0IndMKfS1ihLcVZuuMJ8W7Scph3XoN6pB7VyyQ3B+rjoYStInXw9hbA1CRU35N6vfi8VCD8KxUK84b6kGZx+6lKJLsmmjPCaGPu+Z0ST7M1CVVV5rzPhpBHXzqhE54T4fYrCXlb+gTtbUTYBTUe1PEuNhMpcPSAbWmXKHKRtaH4N8/MgLnzcwh5f4i+J/O0nQd6944+05QS8u2DdtUJzf28OaE5xlfxHctTCPkWUFk7ljuhEzrhZxDan+dIWKEtxVn9sEfwK9zFtjSJUL+8RzQxIozmzyJR734014Z+/LXOtYnr/7mDYQKaE+bjGn2xfcW4tkWDqKszjq/ytOcUwiOU4T80ZcYmRuKnITlhVTmhEwZ9b8KRWYIIffTRiVaRUggjH/AQPeNJQsIEP349DL8mh330wa3dAJswXOKEWL13/Pg5QsIUP76eXJYUlUdtcCXtOxXi+qjTH6hNzskOFU4HdEIn/L2E5vmHpyIMc/1HEN4k6BULnIrbvE4JwY8/n8hoYiSjiLt+OUY46OWREYof/y2OWAlfsV6aqEOWaCexnB14uEeqRgnVFCP3wlybBkKkRJvUqA2P6Naor6y5NlSFk1bzz7dIIsxZ6eyEZTmhE/4iQvVbRDs6Y28ROchVJuE+hXANizPfVotSQlkfupqkE16ERZ9yJV6rbdh1Tf1TasqWrTbDzxzmSx8g8SGFMOfk8fyT5bgwNuGj57y/gvBzZ/Wd0Al/JKG2pRojXOGcGX56fAphkmfmeML7CTvkZQZ72CjhSnaZGaPvaTspH3XTazPRc2Z60fqXjyJUVThnhmpFC7DXPX0OYYUTPKjsiCG+ds0JndAJ0wm3lQnPqKXp9mFXSq1RS3alXOqWmup/1zMs+RrFgCblhUcvpADeTfy5ZXtfnpow2okG47yj3nyGvw8lNL03kZJiE48mjM63qL6roCrnXG4ndEIn/CaEmxMTRjvbJBBG++qfvC01VSE2UWXOl0ZR6qovOf3haMK/P57w5/+GTuiEX0RoRkEj4RMS0i/vIGuv4dCHBH+2Jto7Q9ID1iLtKOFLccTadISEcu7aVH+Jhp7uhoT3YoR98KpTPndt2kLCqZzjps6rpp7uZp67dny0iSqpx0dCKr6HDf9LjirE9cGEPL40hTDlf9UJndAJqxPiqQCo6OSA4wkb7AzmA9KsvfK9pbLgmc5L3oDvjcKnYLPU3mK4M7Ls6ENcLpfL5UrQf1RhGG4R2eHIAAAAAElFTkSuQmCC"> 
          </div>
   {/each}

</main>

<aside class=blue>
   <p>blue points: {bluepoints}</p>
</aside>

<aside class=red>
   <p>{redpoints}</p>
</aside>

<style>
   h1{text-align: center;}
   main{
      display: grid;
      grid-template-columns: repeat(4, 100px);
      grid-template-rows: repeat(3,100px);
      justify-content: center;
      align-items: end;
      
   }
   .card img{
      width: 100%;
      border-width: 1px;
      border-color: black;
      position: absolute;
      max-width:100px;
   }

   .blue{
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    left: 10px;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .red{
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p{
    font-size: 30px;
  }
                          

</style>

