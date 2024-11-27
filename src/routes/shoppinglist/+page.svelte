<script>
    import {fade} from 'svelte/transition'
    let varor = [{name:"parkerings_skylt", köpt: true}, {name:"avgasrör", köpt: false}, {name: "c4 explosive", köpt: false},{name:"teddybjörn", köpt: false}]
    let naeme = ""
    function remove(i){
        varor[i].köpt = false
        varor=varor
    }
    function add(i){
        varor[i].köpt = true
        varor=varor
    }
    function handleSubmit(){
        if (naeme.length>0){
            varor.push({name: naeme, köpt: false})
            varor=varor
        }
        
    }
</script>

<main>
    <div class="container">
        <h1>⠀Shopping list⠀</h1>
        <div class="categories_container">
            <section>
                <h2>Varor att köpa</h2>
                <ol>
                    {#each varor as vara,i}
                    {#if vara.köpt == false}
                    <li transition:fade>
                        {vara.name} <button on:click={()=>add(i)}> add</button>
                    </li>
                    {/if}
                    {/each}
                </ol>
            </section>
            <section>
            <h2>varor köpta</h2>
            
            <ul>
                {#each varor as vara,i}
                {#if vara.köpt}
                    <li transition:fade>
                        {vara.name} <button on:click={()=>remove(i)}> remove</button>
                    </li>
                    {/if}
                    {/each}
            </ul>
            </section>
            
        </div>
        <form on:submit|preventDefault={handleSubmit}>
            <input type="text" bind:value={naeme} style="color:black;">
            <input type="image"  id="add" style="width:10%" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFhUXGRgbGRgXGB0YGBgdHRkbGxgXGBcYHyogGB8lHhkbITEhJSkrLi4uIB8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS8tLS01LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLS0vLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAFAwQGBwABAgj/xABJEAACAQIEAwYEBAMFAwsFAQABAhEDIQAEEjEFQVEGEyJhcYEHMpGhI0Kx0RTB8BVSYoLhJJKyCDM0Q1Nyg6Kz0vElY3Sjwhb/xAAaAQACAwEBAAAAAAAAAAAAAAABAwACBAUG/8QALxEAAgIBAwIFAwMFAQEAAAAAAAECEQMSITEEQQUTIlGBMmFxM7HRI5GhwfDxFP/aAAwDAQACEQMRAD8ApDQd+X9fTDrKyrqy8mDCTFwZgnblhsyFd/6/ofrh7lWlpgMBJIYSNrgxuLT7YDISbimUC5/M3IVmZ00EXJ0PYHl4uWB1LhsU/AdUE7c4HI/X6YkuY4cpq06umdSKdBG35QL7KoAPtjilTNJKawAhaTyPi5b7kmw6n6ZsjlWwWBkoAgL4Sw5Hz3iB/Rw4p8NRSzPsFaY3GxBI5j+pth//AA4rsuki7WlQPDYgkzEQY3+mH3HgtSs4o0pWTBHmABYAECxI9RO2MyUqu6KuJGP4CkGV2nRqWQbGPmOqeXKx543U4fSFE1liUPyTMgncDcfXl74e0ck7mxibnntzjYk2GH2eK06UOoYfKNMTeANuclbxgrM1tdkQ1fKA0yySLQA1iY2X7YBXLBGYjkGJtB5emC6VFQlaTyhGk6ptPO+1/XDjJ5BqziEhaRNxaYgTynfkOk4Ory929iDbJ9maisRKvqUr4TABZTHiMC3rgx2N4I1OsqVxSMutpD6fEjEm+kiLRN79MLVcnVoFWYk0/CNM7aTFwOW2CvZNTUzVSkyHRNNkJaYUsFYf4gGYRzvtacKXUTn9NMtHuQzi/Cj3rMw0zUceGIADwNKEgxtEW+mG1Lhc09akPpv4Rff867qPSQY3xKe19JKVQEhmBqOZFjZ5lRujb288ddmeGiAsVO9IgrIiLXDTBuWmJ23vjRrdF2kkiNcRyxRlVCFIIDQII8IMFgZkaibW9dsLjgBbSFVpK26b6SCAOeJDwvILVzJesZVtUMEMg6gbaLCLb/fDinwqoatZvEVCt3bKCVmH8JixJ8PhsdrCZxNTpUwbURFstZACpuRAtIgAlhFvfzxKaHBprtCMdKNH4l0uADrBl9KgwNovsMCeH5CoFaVK1EtGnkFMiDudh1v5YkZQuyu4LFRT1FhcSzElrdQBAFsDVuGHcjROmpsrgMSBtq/7zLHIzvhhnKKJWgOHXWLowJAtJBtM8thiQijTUxZY36WG8jrHnzwMo8NNTPoiKRrZRqBEQBquSbGBzw2D7FBPiaU0ZTRbUpvMglZMAGP6tjFon8oEXNjB88KcWpuCSyhu7ZVMt8pJIUG++/XfDU1QB7eXTYxisoJ8FWhKpSIBv9R05eWHK0QaSTIN9jBi9wP664UenKyVv4Zk2EiQZ88EeBU1NIhkXRfxRqN+lrcsJmtKA40gNVyjKNJ8IYi9pMHmeXK0frhFcpyPipnnF9Q+YkDYDkb4Pf2QrEinUfUebR0IvsAJHW2Ff7IeGMksu8XWRAm4E+eFauWitEXr5emQNIED80ibTPmdumOeC8BY1HcKKippZqZMBxqAKAgzuYsP9TGYyZALHYLusbxvzHS4xzwMuCDRJLowOtW2IuARG0iROLwytAvcE8QoaJDKyMCZUi62/TYzsRiOU0tJ9P6HPE/4pQNeoaz1Lm7kbEnlO0QNh7YG57hVOtq0juysSpBVvMgvyuY9dhGG488FsEiOeqqQgAhgDqO4N/DB3ssC/TD3hOdUI1Jp8XIRDb7+d98cNwgqCajKgExJ8TdIX6dIwyoVCpt5/wBD6b41WprYs90E04QW1aTZZM9BzHXa+GNamomQ0g7HEw4bSqrRDPGiAA1gxJHyzz58re2B9Lhi0/xCLiYU33AuevPlhHnafqYvVS3B/CuEit3VgQ7nVB8QUC5joJF8CqmXIqMkHwsR9DF+mJG7aWybJqLF3mBFu80xYXkefrhtW4ewz7KBILVGHmAC04dGfuNT2GGRQaoImWAFtrmbjbl7Y44kAjkCCORBMbnbywU4Uy/hglvmkqOpBJmBI2++22BvH2Bq2XSIFulz5CeuLrkI0NTwadxYg7Qedovvg9wlqaGVLiV8an5WvZdSiQecGek4jqA/zj9sTLhOTFSkTRZSsamBg1AQbWN1MxtY9bxgT4ISCnUqO9H5mYpCsg0KDqDEGB0JO4E8jgln6FKuVWvVUUwfym66TBKBUOo/NY7C84TzgND+DJhlbL95zHj1ACwgjaZF9xzwz7wuwUBdIJBmdV4OoRYAEzuSemM850gydCGc4JTpHXSreCLCS2poBlSgkrcbgHkcD6dRgR4lBv4Qdx5ruNv6nEhkopCs2mbJaI3m/OR0wxz9BJJL+I2htvWefocZ/Mi+wElQB4jmHIDK8R0iwkEjDR8y9dDR1tp36yRsBz3Aw/zOQ716dNUBdyECrsSWADDpYX9CcWZ2e+GuUyxV8zGYqEWUrNJSefUmRGowB0xrxY1LgBVXC+GVKzgAxcEm507ATa9zETv0xN6PCMvSHcjVqgMTq8UxeBaNh98Smv2Qy7S2TqmlUk+AkOu4kETKSbbn0xBOMZarScmqkVEtDGfCdUEAbgmb/thXUxaVB2D1LK0CdIptLAAgux1bTzi8gzglwrI9xmDUo0SrEAG7GQG1QZMHxCbXxFMjnXUq8KdMiUmQDp1bmxH74JpxZwWEQNOqDOkmYuOW++OTKWWLuL3JEIZ3gi5l2esGDsWly9g1pZViF9dJuMNOF5RKVYUabhlSmS5+YKdjpKxJk7QLgXw3q8Vd3UVNQDGCqNZ7wviYWMmJ++F8jVRNZLCTYgksUJU/NpUKTq8zEb3xsxKb9UmWvY54PnDrp63cQpAAgKbnSrKZBGm/O/PC9ZylOoUqkio1xyVflIttqYRI5DzxGqdDVppGGBcSdpnb1E7fTnh12hX+GZKQM+GmuphuLtzO3jYx5nfDlP0gctg5kT4idKrMkECVB++GOcrVJIJEnVzsxvAncThCnnV0hkCrN/C0KI3i084jHNekXR66kDSAAJkwwg/8WLRVhjurGufyfdAFmVnZQSBfeLHpYn0vhhwLvmzDurlKYMl9VwAQbc7xY/thTiNdnlW357CSOvmTOM4ctSFo01mowDvGyLsNR+31xo6eFzerhC23dIONwvLVAe8V7kkkOwJN4JkxNzyxH+OcHFM6qdQNT/MGEMtvKx+2CGc7GVjRasM87MqvppBO6lwJC3cgj1364iWQ4+1QGlVs0ET1sZUjrjZ/SnaSojjOO7HNUFqWkAWsWJI1dA0WgQCMFOF1dKgE8gJB6RvFt74jTyE1apkwB1F5t5W+uJLwXgWZdFYBVSAdVR1RTNrayJuYxiaclRa9gn3zSCgDCee0c9ttxv0w9ocR1We5YbghtIkgxMQPucMs1wyrQWGU+G7EGTcbwNljnhGgRpk79JM4xz6ff2KUFa2XoDxOZAACg7ieUnlfbDbOcT1JIBgFRpBIFhbwiACPTA+qutZgkxHljivlEg6ahSbkEyAY8rxivl0qbIxlUzbs1rQSVBAX6Fja/wCgwtQz9amwqghWWSBdjz5QVMg7Y3w7hC1nFJVatVciNOyrYltvDtcn2ubzfK/D1tM1C4a9qOj2J7y522EdMPh0zlWhfPAnJOMFv/P7Fc8Q4m+ZcF6aS4i6hRI2NoUcp9/XCg4GJUd2CzcliDAYxrkaRYdPInDvtJlq+XqijUIhZ0MwgP1YAxpMRblHPcsKGd1h/wAVtQWNIBPvq3n64rNTi6r88hVSVrcLUMqqUtDUwoUmGLSdvyqSRad9red2OZytN5Gqo1r+JQTsCdpAjGUeJSt01sJ3UiOt4jpf16YcpxEsL01RSBvufJdp+oxlk8idi5ewzrVdK0giEKBpBBkASf58/I7DGq1FWr0miT3DXkG4Gk25EE8ptG+FOIVB3ZhgCI0y2kMBPhabT788IdmqrvSqgjQyho8EwjwxgReGAMee+NOBWnIvh5s1k8sDVytNbLUdgSJHK8dOe2AHa/L93mnTpA3J22knc4P5CgWzORQEiHfTBvCwAdoFwdsBe3KkZyoCSSIuTP3gY2wfq+DZXpGGTZiIL+GQLtpi+9zYefKcSPs7xHKUlNWsahe6/hQGZWQipKk7xeTbaIxHMnk1qbuEJIjVsdrz5E8pw9zHAatJ/HACmCymVHXxcxGLya7iy2e0fCaTUMrUpVWYCjqBqSO8UqvyFjAg7rv4hiOHhzU4cQDFrSVBv9dhiVtW0cK4dqmE7xSQOXjAU84OkbdMCxn+9RGVAbwFFpgG0H036Yw5+dgsFUX/ABdRqG3zi28He1lFhF8a4hRWodSsG5GPICRH0w14vr1Myi51SB58vO1sAc9mtEaTt0NxMzgeVrdpgolPZCh/t+XJsqFnJ8kUtP1A+uLbrgGBUB8UkKNUX633g9bSQMUbwriTU1es4ldDKbS0MI8B2B+2+LoFWhmkoZkCdSK6Ns1xMfe4xsx3GNDIR9xd2CEkFtRvAYydz8xmJ87fQEQP4p5xWbLAGCQxDbkgwIkecb9cTZaFN6venVI28RA8zAMYp/tvxcZqtSKAaUV9MC3iqNB85VUP9WMt4tMM4iGVy2YqaqtJ1JWxEBTtykAH/TBPLZ15ZK1MqxDC4IAuWgTfc7+eGPBeJuohllNyALHcGQbH/TDvP50VI5AGBEREefLff3m2MOSEW6aKLZjmvmXCJEmSoN4ADOSpncb72ON6dFOtc6zIYNaRrXc9SFNwcN+JuFFKHsoU8yJBsLXO04QzeeLBm+bUVixG2oi0iCJwzQ9NpAbCnAH/ANpp6S1mtv8A3TBJF7b/AEw0+IcnNudTadFPcyZVYI5cxjfZOqBmqBLDe0TuR5GcdduKiPmC1RwDp25GGaNp6WPPEiqj8k7AnhVYAAMfCG3G/wDXlglnK1MUNQMudKwYsALttPKLfbEaFUCYYaTeL4J5ik9SggRVbxNMKbRYFnmBvsYxeMHYV9LGeXfUw1mdPijaen3I++J/8Hamujm6xXXUNaCBElVRdIE25nFd1afdDxFeQsZAvO+3LrhHgXaHMZasTQqaCxhrBlI/xKd4Hv546EcLeOu5SM1GVsvHMJSrkqQfAPlZdJEk7yLiJGPP/aBEXO1xTMqKjAev5vvODHEviLnqupRVVQZEogUx1vJGAWRp0oJctMSpHNpFtxA3v++E6XDdjp5E+AnwfQav4h/CppUqabS2lSQI2uVA9MWCc4c5U/h2RqlRSCMuPw6VJVgB69VZclhcUkIjZgSJxXWSqgVECkeKogJIEhWlWAPRg7Ag7wvQRbnYLgATKUKpaDUVajaTpLaoJJO5J6z6YkWkrRSMdTBfHMjVooWamKbIo0tReo9NheaLU6hY095UgxyI5gK2aQ02blFgAQBItMc/OfbFjZ7hS9zVIZmsSFLFtrgRty9TiqXJo/h3iSN7wbgRysfvheWWqIJwp7DhqoZNAbcX2CmeU8jttHPDevTIS7DnzMb2NxJ54TpZmmToVYafmkMII2CwADbeb7YcZ4oSFZmaYBkQN4uRMes7RhGqtkVLG7IcL/gcsKlRlpNVUM7wDUYMJWnTBuIBuTN5x3mO1tMN4KbtcGXqsDI2OlbDbDelkXzQas+oqvhVVIBOn8qzZQNvXGs/2boimGUVg52WzfWQP1x2lLDi9EufscPyer6heZjVJ8XVv44X/bsF/EXiCZvI61TRUouHI3JDGGhrc2BIP74qM5jSdV/OLH0nFj8eQ0aFZagIMKPqwAIxAKmWDAFWvzn9Y+vXGTrFCM1XDRr8PyZJY5LJynX7CuXz9TvFJ1bGZkgdNuXng/lVDoDIJBI0SCVEiGhuUkCbb4E8PySMLuWIIPgtMG9+W8/TB2pmFQDSu25gmekmbiYxyMri3SRqcbFM/wAJzRomsyIMuoAJWormSdIYojaluRuLc8C+GKyGrqjSafhF7y3QbWG0c8d5mo1Ks9QQQ4vE+KQsxvAsfvhkM84OouelhbciRN+lpnFo7fStgJqMgnkVU5/JIbaQ7EyQTOrTex5Yjfbr/p1YbwQOnIYM8DR6udo3J2MMvS8dOWAnbIf7bWnfUP8AhGNOKVzr7f7Nqd47+4JpUZNzHng9lXeiqCmzUiwksrGWPO4PhXy585wPyVJI8Unfmb+VsP6FBnE6tIUAKL/ve3XF5TvYS9y1cq5zHB6Ds5LpWdSdRA/ONQG1gwuBOAQBo0GiAELGzeRtvsDNt/ScSns7TnhVQMUJSqI1CCdWhh4vOdo3wD4nw4rk6pIO7DTF/mA8UiRuI6zgUmqZfsRKvmA7sdvl+XzXoPphoaJrOEUF2JgWuT6D+hgg+R06m0kC1miSI+vO1ojnixez3B6GUyvfVqbd9UUXH5Q3y0gZ8JIgnBx47YUrZCOJ00oKMuBMr4j1bTM/pGH3Y3M5vLIiVFp1qFW60tUPT1PpMahHzG6efLEb7SZwnMVG2AJ0iZH5QfWNJ++JjwvjdCrlnarQDPlNLLpiIAkAkGfEQZJBjDsMVKTRpey2B3aXtNXehXXKUO4SmVSuzFRVUOYGkKYgyBqBJvbrgNk8sHoKSACgj2sY9pxrjmY1vUq0kdAxA0LZQkGC0HxMDAmLgzvM67N51e8Sm5AVzBLXAB8MkeUYnU4fLaj3K1quzjUonxEEeW/T9cbepTpzqhuY9Pbbf9cddpeGGhU06ldXAdHQyrAzEHAStXGgjnB3tFsZPJqVMztC39q1CQqKRIkKq7jqAN/XHQ4tUQw4IPNWEfY4uPsRl3p5TKVNC1C9GmGqeEMFCyimBLaQY3wv2w4L/GpUotSEBSUqyJVgLRzjrjX53ati3kbFXdnc3/tFLSOf5QJuD7b2xvtvVV67XJIRJgRyM/rgN2fzIQ06hvBuPKf9cb7UVpzBI5hDt1E8t8JaVtIquBvRu3OBc+QHL+Xvg3X4hNMpHhUbbCYHL3wFrPFIm0swEjoCCfvH0wlWzX4hUcwZxv6aKjG3yxUt2LZ6rIA5Hf8Ar3w04MmnMoYBgOwm4MIxgjntjqu0ATyw44Ik1p/u06x//Uw/njSlcl+RWR1CX4ZHQDh3llk6ZvyPvjhhh3wnhNTMPCWA3Y7D9z5YSsWrZKxs8iitUtkZlaDVHWlMamAnl1JHti6vh7xyclSWsvipBqci5Gg6RI6wBiGZTglOhciSqlgzRqJ8ug9Mbz9Mojii2g1CpLCYkxq1A9BIJ5xhsvDJLG2mr5+P5MWLxOPm1Tp7fP8ABJ+3XbJUolKQ8TkLvBInxRFxa3W+K+4lxB1qEOBqIUstoUlQdMbWmPbDyhllUB2AZ1jxGdbH/BPyxvy8sGq/AcvXU6hBj51s6nbxDZh64rLwyTx/ck/E4+ZuvTv/AOkXSoN1CAmOc+kD64Y1s20+o3268sZxbhD5arpLBlPysBv5RyPlhxT7PlUFSowB5IRLE8gQPl++OX/87UnFrc3RnGS1Rdotr4XcXNXKlHgVFYsRaSrbOQOpDfTEkFYloKMAJ30x9jOKFyvEK2WrKKNQ0nkKCPlILbEtyvJBw74926ztXvKPeqFDMs0kKmoASPmBJAMTaMOlidj8eSMY1Q/+JnG1zFd0RwEQhB0qFASxBHJWJHqMQzL1CY3/AH/+DhxwfL6nXvJ0x7R0jaPKMTOvlKWYVVsmidMQIt+ZbWtyjFp4XKIja3XcA8MpLEkyZ6zz3MW3/o4M0cxRWGZAxHhALOo5zPK8DywIzuVfKvD9SVYbMLXEzt9vvgmO0ANJUK0mCwAxphXteNUCem/1xzckXG75I3SGmdGrUWqoBayi6eL/ABQTMi4nffAyjnaSmCfEJhjaxNwSDHIRbBnNCi9ImytuG579CfFvt6YFVOFEkaDF/CNN357EkCTymMLhKLVPYW2hwvEHasKtHwuSotBGxXnb82/ngPxnvO/qd6PxARqkDeBa1rCMSfs7w6M2g089RA8It9uWxwP7T0P9qqkyZI3N9gALHyw/FVj0no3Y04Rk2rAhAWYlgoUSSRDQoi1jNuQxJeCcB1Uq61FAqowENIMlDJAFpFp23wK7HV2pZykEhnFUGGkyWGgAxYcr+mLAr9+3fORTSpqUuqIbE1HTSx8zBmSLDDHFckdIW4dQYUop1NBHdFwLK3Rr9NNz69cN+JK1KkdUEuGJB0lt4PKecyL4Up5Oogd6jRpVNJsATqCQY2I1CxPOThfL8PLto8I0gsWM3IIAVmgW3M38sCEdy/YieTptmMxTQr4ZGqLKdMlmK2uQAPfCfE+L1f4qtSZGCE6k1CJKWOmdp1KcS/svwlalTMqbAEQ8hiEJ1G09ABN4km+I121GviS04p0x3YUaZ8RBLiD/ANowMD6Y3Yl6KXci2oiGZcFriTF/8zEz7H9cSQ8Y/Co5ShRFNqwIquQIZGshaRcG5nla+GH9k62V9BGqwmxZdXhgbDYiZHX0lvGezpKZerSXuQFCuzEs2+4CgiB4oGoEkxE4rgg4zdjcjTVAGmaX8K9Rgps9MqG01EOjWtWS0MngKkC89ZjEWoACR12Pv+/6jFiVODZTL5N6jkVZfQ1QPC+MAABSwBWGBab9OmK9rZUpUFOJKn5fNo/lBxOsVy2LR5Y77UZsM6aEKKtJUuR4mQ6SywbncT0+7TKcPDR3kTU0qJMAFiAC3TfBmtwipVzFKgtNQKdNizTOiW1F6gsSTYAWn6nALPUagrd2AWeVAETfkCByxXKm5WI1R1NF19lcnnqWVSjWCBqcqG1Ah1FlsNrR9MJ8WzmcGXqihS71yXp+FlUK2xMuw1AE8umHdPioGRLmnUJ0VJpG7yZimI3FwoPSJ54RyeZShw6SZKrUNydTMWbebyTi7wxMsernpvYqXKZYLTVgoFRCNQF4g9Njhn2nYNmWZpDBadt48IifPywhlc4yNa8m+5BE3jrhXNZVnWrmIPd/h3/KPFYA89v1xnUW3RqnXIP4rVAUJO0frfAxanjn1xvNVZvhKmb43vlJCUtggX1DBDgu9U9MvWP/AJY/ngSp6b+WCnA2/wCkeWWq/coMPh9SEZfoYxzuW006TaY1hzMg6oaJgfLe0HffniecGyq5anTX+9Zz/iMX9LafpiOGh3jZCny0Fj6ayx/TEjz16VQC+/67Y29LirVL8ftZy+uzatMPdu/7tIUzbl2cnYKQB5n/AE/XCufTRRkidaxJm1xtHW4v54wJCx/hOE+J1DUemnKmgG5veb8t5PvjbLhI50JJyt9hqqiBO8j9/wCWHdTO92Aev7XwnUXwkgbA4Hcbf8Ony1MB7RJ+2JOVRYccdc1+RrxDNElQd7Mvkbx6WOF3qOZaxPIGbdcDuM1LhhyCgR1OOKCbk6mMX/bHJ6r9Rnf6NJYkI8VDMIgXPLljMnk3a1Ok7nkFUmBPkNr47rux5H1P6Y64RxapRdXBIAtCsUlYuCRe+Mvc2D9+B5tZPcsNKhmgiwO038scUc1pp1mJuVI9PCRvh7xDjwZCqKQXHjaWk9VaWhrWk4j+fa5EWMH6wsEYnACfZhVzGWKFQW0EodyrgWI6XxD8nQi+uAYtyO+DHZbNyzAEgDdZ/nERbCacLJqMtMAqrM83I0mw0j1YD2xj6vHqphSsaJmkf5lOqSYtBnnJEgeW2C1PMUz3NNVAUMTG/wCUgbfYzhmOFVKI1VKZEmxMxzPpy2xmZ4VK6hAgA+HHO00wpVuhx2cTvc+TIOkNfYWuJHuBHPEe7WvOaqEC3ksDzEcsSjsvwx6VdjmFY+AxqU6dxv138/LEez1DM1KtVqSs662grIG8/wA8aIKhjm9KQX7I8Vp0eJ0KsDu3lGmPDrEA+xjfzxfDcLptrIXSzqQWFt7zHMggGcUpm+zyKrpE1NTAmANpv12AH0xbnZXjff5WlUf59Ol/+8tifeJ98a48FQR2iyvcd3RSWBo1TJtBFSjG3qfph7wbhIp6ifEzi+8QbqIO1re2B/H85qztIEiBl6x08wO8pCen1wbXMwFIjlH2/YYCXqYW9hOjXooWIAVtRRp8OoqBAEG4Egc+mKh7QItbOLmXYh3rpTRA/wAwF302n8wHlP0tFK61XqCpoanp06NmXW5LX5sdOq3IYqTttlVp0aHjDFKleH2PiZCpiRcALI6k9MbYqEY/fYaklEm75KlVbM0D3lMUBo0poKql9BqFifEbkbGADjns7nGqcPzdBHZjQWoKNRl0/lJEAE3U3HS2Ix2V4lUVkDEOlVl7xJJcqpklYEkRIt5+eHXbbtDmSlDLCgtNpNQ6TClJKqIWL2Mj062dPnm1sGUpNX2O+ztV/wCFp06y9/QFYaqYUly0SG7yeR8Wkm8YH5R0rtn8wCrGlq02ZSdPyMIBgELvtJ6WxM+4p08xTy4U0gQlYrMuxKw4WGkKqneNxvfEL45Q/hGq0EonTXqrTRW3FNz+G2qSD+dYG15JkAVnOMW9C2ZRyUH6Sa9g8i5yweqB3tfU7mIm5VJ/yBbYPcP7EZQOczTTx1IaWJMeS9PTD2hSCJTAEaRHttije0naPNZXiGYGXzFWkA91Vjp1QNXgMr808sZ3GznY3c3fcvbO8PUK0gWlh9IwL4PlO+y1BmSS6KxEyBqEm5333wO7OdoK+Y4Q+bzJUuKdeCq6ZCBgCwFplTtA2tjrP8WqcO4PSrUwpqU6OWUawStwiEkAidyd8Tf5I4r6e1j3hvZCllZIA8bGRvA5KDyAN4xF/izw4Jw4d0oUK6yALaPFy8i2/mcD+wXarOcQzhGYrFkVZCBVVBJuYUSbAi5O+J92r4TTzWXqUnZhKN8vU3BII/vAYFNEtRyHl5h5jBngXF6uTUPR7uah/PTVyNJtBYGJP6YCAWwVbI1ClIrTZhomVBO7MeXti0Ianx2NM5qNWw1W7YZiqNNanlnAMw1BYm9/DHU4V4Xw+pXWtWRKNMVaZpqqSqgh1kkGYnSeeI3UpuvzKw9VI/UYnvY4xlk/zH6s2NnS4YynT9jn+I9RLHh1R91/t/6G3DMi6VUNRQvdUFpiG1SZktsI9MOM7UCt6j69ffDqpmRrcQTET98B+0LkoGX5gYHvbHTSWODo40ZSzZFq2sMcscIpBZjv58uUYaZWsYAJvH7Ycq8/zwU7FOLjaNzYzzxH+N1rIgN5HsNpwaqVtIPviNcaO7Def0jCc0vSbOjheTcWzrDQT5oB9R+g/nhNqjqSVUEdZnfyxrikLRHUlZ+vLHLuwLWkRa9588Yeqfr+Dr9J9HyNs1VMXmQOv8sJI0A2sJ/XHGfYkXEG/tjO80te4k/zxj7mwcZMmfLkD+m2FOLWFMnaY2jlPvthvUzJFlkfyxzm0ZqZJYmLx79cR8ECvZvNkhomTP8AoJxN+Cse6bUSNKPEb3ekY9TBxBezuY/DAH/z54nPDSpCgiSCKmn+8EMlfcSPfFZq4EXJJe1eYpmmwpkDuyhYGNe7DmfF8/64b0uF68tQpDSDWzGksbnSIBEjl0G2EO2nBWqVqVVKdMUandJ3g+ZSW3Ii0gwCfTpgpwpl0ZEr/wBpVMf+IBP2xjnFarGRWxna/QuYZSdX4KCAQACdfzXBg22k32wvwzsflhTVnks4VmkixKiQPCLW53w049TpVa9XU1yyqAN7KB0k3PpgrLIAgaygAW6CBi8Um2R7JBKp2SyztqdWJ/75Hl+WOmCGS4HSpIEpgqo2AP74fqcKqcXKgzMcAov8yzaPOOk9PLCicGpCAAbCBJO0R74JDGxiBKv7UDMAK+UoNUYVarGBMaVWmtjJYEFh6k4rjiHE6NY0da/82cw9VHkANIbSeZ1MTI6+uLYz+drUagp0j4YZqoIMqCxmopj/AE9N8UrxxQKzNVR11Co0hdyUB1QOV7+U4129NPjsOSklvwWD8P8AhtWtRQ1aCd2q1GRoA1s5QXKmVjRa3M7xhX4g8KPc02Pd0jSU6ioJZy+kbxAA09ZwA4f22C5bKP3rI666dVEUMSkLos5sJ+UzYk+hf8Z48K4ytMNVGpUaurRpuyjV1uATfkRYYDdvYpN3tZz2WL061GtUqpAimXqOp0agQIkzE7crnDCoP4ri9ByoASsQdM6W0a21ifNfvh3wCmuYd8t3YINWm1NmmKehy2kH/Eoj/LPKzejkf7PzVBHqkjvGALDSJKFULE2mGv6g/mGG5XKct/Ypmun+C2824CGZ2kGIg8rjb3x507Z5gPn8w45ss+uhQ33nHozK5bwwXaeZDNPsZxSnxj7PnL5oZgA6K4ud/Gogz0kQfY4QnTMGFPVb9icZBRT7NnzytU/7+tj/AMWHHxStwdl//HH/AJ0/bCdSkf8A/PIg3bKUx/vhf/djXxmraeGsP71WkPoS3/8AOB3Lr6vkhfwXpOc1UKqSoQS3IEkxPnE4uLiDKgLP4UUFmYsAAALsxnYCcRL4NcBfLZLvnu2ZK1ALeFI8HuRf3GHfxU1f2bmSouFEwR8pdQ0+2A5dys4XIoDPZDuvz03mY0MGIHVgNrYsjgdILSpxaFX9MVTSiRO0ifSb4tfIVhA5Wtjo+G76vgw+N3oil9wrVp2kAYaaYk+Xph1qthrmKkA46iPOR3YHp5kLJCEgmSQRb1k4AcezjDYrB8oIg+t8GhXpECSA0XGqPtOAXaNJXw1BEXmL+hGMvUT9Do7nSRXmq1/cMZSkbNO4w7UQcVxQrMt1Zl9CR+mFxxStf8Wp/vH98ZodfFLeJryeGSk9pInecOI3xdjpjn69TgLVz1Vt6jn1Y/vhFUlWabiPvY/eMKzdcpLaI/p+gePdskHFGlLmdK7C1+oxoSTOogQIiBhC7UwOo/MCYPk374b5KobWJMSf5Yr1Eraf2HYI1Foc161jsd7mMbR5sN5PrucNMxReT4YGFaQiXnrz897YzXuPHKojfMIP0P8ArhKuh8SqCQR77jGmamSGDCR0MH64XoL4pLE+/wCmIQQ4QjU6kEwAJ3Efe2JnwbjIWojUUFV1IvMKI/vPz22F98RTPUtT04sDqB+xwc4Tk0QqYO4EkE7/AKewxEuxGX5WUVKZBCmRbUJAP5THkcRSjk2y1TJUnIJUvJUEg6n8/UYlVF7AdLYCcd4H39alV70r3bKSsSDpbVb+7JifTGaSsZF0RbL0f9rqLZtFZvEVBcMakxqI+UjlJOJXWpid8QLh5UZxWZgTUzLlbb3dhB8rmcTio8nAh3DMmaNhQNhBThRcXKi6nHYwmuFBgBK0biIFbMHXZA5I0MxdHOqCwGwsJBtcYhHbHMrmM3To0X0aaWksrCa8reFGwiowHv0GH3aftAvD8++ukzFflAlIuQDcQwtblfngNl+O085mKD06LagKgryQX0Fqelg5I1G0ct8a4tOkO1LTTYVocIp0aVMVRpCKe8UBdQ8TfK0DxWUhWM2I6YOZjs5kqtKlnKXiAQFmZio0osRVAt4dME7jziML5fjWhMwG1aXqFkWA2pSZ/ELc/IWsMRfh3aVKdDNZespjMa1UU0UImpSJMsDE2gYvNqTvvZSU8d2g5UcfwPf5Km5IzClFQgl/BsxAJqL4mA9ZGIx28r9/njTUaU7oBvD3gWoFMwnMzUAkX58jhx2eD5YLUohdSzuWlhFkHK/U3mOlwWdzGayiU81UpPrNWrqfTCFn0sArsCtTwqxsCBzwMnpb1Oya9XLsuXsbxM1aIWpArUwFqAEETHzCOTb+Vxyx3247PjP5OpQtrjVTJ5Ovy35A7HyJxT3Bu3FWm/8AGlZRW7tkLAlwykhVIUQFImNt8Os32szhqVRSrk1mUd7WB/BpjcUsukEQJgubteOpzykuRC6eU8unEvwTyvqpcIo03UqyJlUYHkQ1JWHqDOGPxUyFbOHK5OkhPeVSzEH5Qq3J5AAMfeOuIRxHtHmUprTqF6ikpqYnUWKsrgk+oGJcvb+shLjLqwC3mV35qxFhPUX8sDWmjU/B+qjkqKTa32f81/gsyAqhQIAAAA5AbD6YGdqOBHN8NzVJQNdRJSb3Q6l9yRGK7yvxNejQbv17/SIp1ANDFokU66Ce7aJOpZUgW2OLq4PW10KTwBqRTA2kgE4EnsYseOUZerseOKGTerIpoSUQu4G4Vbu0c4Fz79MTrs5nu8oqYMjwmI3HO+Jp8RfhSQ9XO5GotLw1GqUzIF1IcIRYBgSNJEXN4sIb2fyYpJoO8Xjrzxt8P1KTa4MHizh5aT5Cf9pU1MFiD5qfr6eeOM1mlZDoYGecHDbidLSu/wDXTDHhzjR4jBiw3j/XHUeSV0cWGGGnWv8Av8ELzAZLML2kEjVcTcbjDdapEgWB3HLBztPQIdGudSxfyP8ArgHVA3644OWLhJqz1eHIskFL3NIcdmg2nXpbRq06oOnVE6Z2mDMYSTCwrtp0ajo1atMnTMRq07TFpwFwhomRjukh0sbQLG/WYtzuMcNjkHAnsRDnK50qQDJUESsxI5ieUi04UytaGJW28A39pwjw3KNWrU6SXeo6os2EswUSfU4nXaf4W5zh9N8w70nooYLU9TMAbB2QqIGwMEwSPXAjN92BxXYj5YlRMTG2GNbL6gLxFiPb95x3l8yD+Zbcrj9cOEEywAI+sdf3w20ynA0pZQRvf0w8pU3AAkQP69sJVmBuWgdQDHpIthEvTBk1Cfc/yxLSDyPs58iliLPvHqJnEw+HlI5nNUkSXVWVqkbIga5M9dsV/mTKSCSCxjf8sFvoCMS74R5s0OIUWXaoe7bzV4AHs2k+2KuXsSj0SuSQcp9ccVMmh5YdthNjhRYDPwChq192uqZkWM9beuMbIU+h+uCVQ4bMPLBQB8pGFVw2SphwmAEXXHYwmuOwMAJXnxE+HFTieZSqtdKSCmEMoXaxYyACAd+ox3w3sFR4bk6yo5qs7IxZ1UERAgRePKcWFGGfGkmhUH+H9L4MXugPhlZ5rKSpxBuJZGKg9cWUadsQ7jdP8WP6vH7Y2rkzMc5WhFMRubD3xZvHexeVzuXo0MyrFaQGnS5Ug6QCbWO3MYhfZfLB61BDfxA36L4jz8sWxOM+d8IbiXcqPtj8PMlR4fWWnTcfw61KqsG8RO5Z9UKwhQvkBa+KT4NnlpvFSQjWlb6TyaOY6jHsPN5ZaqPTcSrqysOoYQR98eMc/T0OykEFWZSDvIJBnztha4o0YsssU1OPKJ/TbVT1FlNG+hAJ6RqawN7nxc9sJ5vMrpZWeNPia5iRYkGNvKJBxAKGaZIgmJmJMH2GFK2bdxDOSN48+vmcUUbO2vGIqH0vV/i/3FKdZHqE1Fcgg6QkAz+UXBt1549jcLyC5ejToJOimiouoy0KIEnmbY8aZdijBgYZSCOcEGQYNjj2H2Zzr18nlq1T56lGk7wIGpkVmgcrnF5KkcKUnKTk+WJdrM2tPK1dYnWpQL1LAiP1Ptik6dMgyb4mfxN48jVadFKikU9RYA/nnTB5Wj7nEFXPGDA+uOt0MNELfc814nkeTLUeFsN+NOSPTDbg1BYsBfyxriNVnRiBsDJ5XBjCHCajLfDucgqMGsFD/inBKmcApUKZeqJZQOekEkX6ifeMAqXYyr/ZmZz1ZalPuXRERkK6tThXY6rwJAtzm9oxbPwtDNmdYEDS2r02H3IxIPjU3/0bNf8Ag/8Ar08czrXeU7Hhaawb+7PLQxjG+MxrGZ7KjonRxlOmWIVQSSYAAkknYADc46bDjhWdNCtTrL81N0ceqsGH6YvJERaHwU7B5hs0mdr02p0qMlA40mo5BAhSJ0rMz1iJvFj/ABqzDJwfMaR8xpqfIGos/t74muWzAqItRTKuoYHqCJH2OBPbXhhzWQzVALqZ6T6R1cCUj/MBhJDx5jpWI2MY6r0WRirqVYGCrCCD0IO2E8QJ1OFcnX7uojhVbSytpYSrQQYYcwYvjmtQKhSY8S6hBBtJF42Mg2PljhcRELD4B3tXKZ2ouWNV3FPK0adCn4aPe6nqtpUGBCKJNyTc4sT4Z/DpsowzOaA70f8AN0wZ0SCCzkWLQSABIG++xr4P8PWlwuiwXS1bVUc/3iSQremlVxMpxaypyThJzhRzhJjiEEqhw2bCz4RY+uCAcURhyhw0Q4VQHAIPFOOteEqeOtOAWFVbALtNxju2p5dfmqq7t5U00qT6lqiD01YNYrL4oZ2pls3QzSJ3irRanUQHxFHeZXzBQYMavcEuAhFojEC4vxKmc4yq86YVx0I3HtI++EOOfE0mkVy1GojkRrqhfB5hROo9J++K5qVnr1Xqk6WYySPPpecOeWnsKWO1uX92MpI+dplWHgV2iN/DptNh80yL/XFnBhjz38DuF1avEO+aozJQRiZJN3BRRfyLH2x6CwuctTGRVI7DY8f9q0f+MzXeACp39bXAgT3jTA5DHr3Hkrt+SOJZ2TJ/ia3/AKhj7YrELI2cSLtetL+MqmiEFI92yBI0qGpowUR0mPUHEebC9I2HPBjyF8HbjHq/4dZ7vuGZOoTP4KKT5oNBn3XHlBzO2Ln+CfHmXh+doudS0AGQbR3ocaQehcT7nFmr2RRyUU2yK9oM8Wr1JMg1HKtyILEgjphGi1sc8S+cjeDGOMllg9SnTHzVHVBzgswA/XHZXpPPVrS92NeJVGDIDIR5M/laDEexwulYAbjBvt+KdPNDJUl/DyiBJO7u4D1HY8ySQPKMAqdNRsAPbFccnJavcfmgo1D2LF+EPFD/ABJphZV0Yao20wbfp9MSb42z/Y+YjrRn075P5xgD8G6M1qzx8tMAf5mH/txL/iblO+4VnE3IpFx60yKg/wCHHN6v9U6PQ/pfLPJsY5wqwthLCJmxHWNTjpRjk4L4Ieufhy5bheSJ/wCwpj6LA+wxIcVx8BOKNW4Zob/qKr01O8qQKg+hcj0jFjg4WQ8r/GKP7YzemI1U9uvc0595mfOcQvBntlSZM/m1cEMK9aZ86jGfffCXZfhn8VnMvlyCRUq01bTvpLDWR6LJxGE547waplHRKgIL0qVUSItUQNEeRJX1BwOxdX/KB7Mv+HnlaaaKlE0/7l2KsOoMxHp7UqMQh6W+CGcrPwtBVBAR3WkT+anYgjyBLL7YnhbEJ+DWa18Jo2I0l0EsWmG3EiwkmALDE0JwQGmOEmOO2OEXOCATc4QZ/LHdRvPCDHBAO6Zw4U4zGYBBVTjsHGYzACbLYqr4yZsBqUHdHB9VYEf8RxmMxZEZTdM99VKm6qtR28wiM8e8R74a5ZdKeZxmMxO5GXr8BsgUytauf+sqaV8wguf95iP8uLPLYzGYDIZrx5x+OlKOKsYA1UqRsoE2IkkfMZESb2A5DGYzEXJCuiMHDwnRw+nmiCC+YqU/LStNSI/zFvpjMZiz5J2Ba1cSbslxoUaWbomQa4o3HLu3Zj+o+mMxmHY/rQnMrxtDipUk7i/TEh+GGSStxGkWMrTl55F1jQuradRDR/hxmMxs6ibUfyYOmxLV+Ad2yfVxPOH/AO8w+lv5YHasZjMMw/poX1C/qMt/4PZfTlqtQ7u8eyj92OJzmQrqyMJVgVYdQRBH0ONYzHNz75GdLplWKNHjziuV7qtVpap7t3TrOliJkWO2GmNYzCHuaRSmOeNOcZjMWbpUA9Cf8n3irVMjUoFQBQqeFgIkVJaD1IIN+hA5YtHVjMZipDxrxzMGpmK9QqVL1ajFTcqWcmCeZExixf8Ak/8ABErZypmHBJyygpe2p9SyRF4UNHnjMZgBLa+KWVarwrOKpAIp67ibIQ7DyJCkTyx5SxmMxGBHo34F5rVwsLIPd1aixzEw1/8AenE/LY3jMWQBNmwhUPnjeMwUAbVGw3ZsZjMEB//Z">
        </form>
    </div>
</main>

<style>
    form{
        justify-self: center;
        align-self: center;
    }
    ul button{
        color: maroon;
        text-decoration: underline;
    }
    ol button{text-decoration: underline;
    color:Lime}
    .container{   
    display: grid;
    grid-template-rows: 1fr 9fr 1fr;  
        background-color: darkmagenta;
        width: 60vw;
        height: 70vh;
        border-radius: 20px;
        } 
        .container h1{
            align-self: center;
            justify-self: center;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 5px;
            font-size: 22px;
        }
    .categories_container{
        background-color: deeppink;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-column-gap: 10px;
    }
    section{width: 100%;
        justify-items: center;
    height: 100%;}
    
 .categories_container section:nth-child(1){  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.1) /* svart bakgrund med 10% opacitet */
  }
 
  .categories_container section:nth-child(2){  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.3) /* svart bakgrund med 30% opacitet */
  }
  h2{
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 5px;
            margin-top: 5px;
            font-size: 16px;
            
            }

li{
    max-width: 400px;
    border-width: 5px;
    margin-bottom: 5px;
    border-radius: 15px;
    border-color: MidnightBlue;
    list-style-image: radial-gradient(circle, #f500ff, #c12dec, #9037d4, #6337b8, #393299, #39388f, #3a3d85, #3d417a, #585783, #716e8d, #888696, #9f9f9f);
}
</style>