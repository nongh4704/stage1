import React, {useState} from "react";

const SignupForm = () => {
    const [] = useState();

    const onChange = (e) => {
        
    }

    return(
        <form>
            <div className = "form-group">
                <label>手机号</label>
                <input
                    type = "numeric"
                    class = "form-control"
                    name = "phone"
                    onChange = {this.onChange}/>
            </div>
            <div className = "form-group">
                <label>邮箱</label>
                <input
                    type = "email"
                    class = "form-control"
                    name = "email"
                    onChange = {this.onChange}/>
            </div>
            <div className = "form-group">
                <label>密码</label>
                <input
                    type = "password"
                    class = "form-control"
                    name = "password"
                    onChange = {this.onChange}/>
            </div>
            <div className = "form-group">
                <label>确认密码</label>
                <input
                    type = "password"
                    class = "form-control"
                    name = "passwordConfirm"
                    onChange = {this.onChange}/>
            </div>
        </form>
    )
}

export default SignupForm;