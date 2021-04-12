

function Data (props) {
    const { data } = props.data;

    var countries = Object.entries(data).map(country => country[1]);
    
    var option = countries.map((p, index) => (<option key={index.toString()} value={p.country}>{p.country}</option>));

    return (<div> data:
        <select>
            {option}
        </select>
    </div>)
}

Data.getInitialProps = async function () {
    const res = await fetch(`https://api.first.org/data/v1/countries`);
    const data = await res.json();

    return {
        data
    }
}

export default Data;