import { useRouter } from "next/router";



function Data (props) {
    const { data } = props.data;

    var countries = Object.entries(data).map(country => country[1]);
    
    var option = countries.map((p:any, index) => (<option key={index.toString()} value={p.country}>{p.country}</option>));

    return (<div> data:
        <form onSubmit={checkInput}>
            <input type="text" name="p"/>
        </form>
        <select>
            {option}
        </select>
    </div>)
}


function checkInput(e) {
   if(e.target['p'].value == '') {
    e.preventDefault();
   }
}

Data.getInitialProps = async function (ctx) {
    
    const res = await fetch(`https://api.first.org/data/v1/countries?q=${ctx.query.p || ''}&pretty=true`);
    const data = await res.json();

    return {
        data: data
    }
}

export default Data;