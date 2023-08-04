import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";
import Navbar from "./Components/Navbar";
import {useState} from "react";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
    // monthlyPayment: 0,
  });

  console.log(data)

  return (
    <div className="App">
      <Navbar />
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Container maxWidth="xl" sx={{marginTop:4}}>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Grid container spacing={5} alignItems="center">
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData}/>
          </Grid>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Grid item xs={12} md={6}>
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;