import { AbilityBuilder } from '@casl/ability';

// TODO: Refactor this utility later to inject user in context automatically rather that passing it as a argument
const defineAbilitiesFor = user => {
    return AbilityBuilder.define((can, cannot) => {
        if (user === 'Admin') {
            cannot('view', 'dashboard');
            cannot('view', 'profile');
            can('view', 'users');
            can('view', 'sites');

        } else if (user === 'Developer' || user === 'Reviewer') {
            can('view', 'dashboard');
            can('view', 'profile');
            cannot('view', 'users');
            cannot('view', 'sites');

        }
        // else {
        //     cannot('view', 'configure');
        //     // Rules related abilities of a organization user
        //     cannot('manage', 'rules');
        //     can('read', 'rules');

        //     // Rules related abilities of a organization user
        //     cannot('manage', 'report');
        //     cannot('manage', 'users');
        // }
    });
};

const userAbilities = user => defineAbilitiesFor(user);
export default userAbilities;
