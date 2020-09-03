import React, {useState} from "react";

const LoginForm = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (e) => {
        let name = e.target.name;
        
        if(name === "phone"){

        }
    }

    return(
        <form>
            <h1>Login</h1>
            <div className="form-group">
                <label>手机号</label>
                <input
                    type="numeric"
                    name="phone"
                    className="form-control"
                    onChange={onChange}/>
            </div>
            <div className="form-group">
                <label>密码</label>
                <input
                    type="password"
                    name="passowrd"
                    className="form-control"
                    onChange={onChange}/>
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-lg">登录</button>
            </div>
        </form>
    )
}

export default LoginForm;