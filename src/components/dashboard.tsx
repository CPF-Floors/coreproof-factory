type token = {
    name: string,
    value: string
}

type Profile = {
    _id: string,
    fullName: string,
    address: string,
    businessName: string,
    phoneNumber: string,
    purchaseHistory: [],
    email: string,
    password: string,
    role: string,
    createdAt: string,
    updatedAt: string,
    __v: 0
}

function Dashboard({token, fetchProfile} : {token:token, fetchProfile:Profile}) {
    return ( 
        <div className="dashboard-header">
            <h2>Dashboard</h2>
            <h1>Welcome!, {fetchProfile.fullName}</h1>
        </div>
    );
}

export default Dashboard;