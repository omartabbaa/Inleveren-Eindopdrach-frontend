const SighnUp = () => {
    return (
        <div className="signup-container">
            <h1 className="signup-title">SighnUp</h1>
            <form className="signup-form">
                <input type="text" placeholder="Username" className="signup-input" />
                <select name="role" id="role" className="signup-select">
                    <option value="">Select Role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="business">Business</option>
                </select>
                <input type="text" placeholder="Business Name" className="signup-input" />
                <input type="email" placeholder="Email" className="signup-input" />
                <input type="password" placeholder="Password" className="signup-input" />
                <input type="password" placeholder="Confirm Password" className="signup-input" />
                <button type="submit" className="signup-button">SighnUp</button>
            </form>
        </div>
    )
}

export default SighnUp;
