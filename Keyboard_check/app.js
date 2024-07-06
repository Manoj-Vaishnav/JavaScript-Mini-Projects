const main=document.getElementById("main");
window.addEventListener('keydown',(e)=>{
    main.innerHTML=` 
    <table>
        <tr>
            <th>Key</th>
            <th>Key code</th>
            <th>code</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ? 'Space' : e.key}</td>
            <td>${e.keyCode}</td> 
            <td>${e.code}</td>
        </tr>
    </table>`
})