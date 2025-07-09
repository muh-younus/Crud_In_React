import logo from "./logo.svg";
import "./App.css";

function App() {

  const [name, setName]=useState("");

  const [email, setEmail]=useState("");

  const [password, setPassword] = useState("");

  return (
    <>
      <div className="container bg-primary m-5 p-3">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form>

              <div className="">
                <label className="">Name</label>
                <input type="text"
                 className="form-control"
                 value={name}
                  onChange ={(e) => {e.target.value}}/>
              </div>

              <div>
                <label className="">Email</label>
                <input type="text" className="form-control"/>
              </div>
              <div>
                <label className="">Address</label>
                <input type="text" className="form-control"/>
              </div>

              <button className="btn btn-success form-control mt-3">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
