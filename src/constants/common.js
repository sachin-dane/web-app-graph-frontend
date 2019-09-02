// List of severities
const severities = ['low', 'medium', 'high', 'critical'];

const returnRole = (role) => {
    let user = ''
    if (role === 1) user = 'Admin'
    else if (role === 2) user = 'Developer'
    else if (role === 3) user = 'Reviewer'
    return user
}

export { severities, returnRole };
