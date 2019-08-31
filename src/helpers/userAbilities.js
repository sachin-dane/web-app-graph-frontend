import { AbilityBuilder } from '@casl/ability';

// TODO: Refactor this utility later to inject user in context automatically rather that passing it as a argument
const defineAbilitiesFor = user => {
    return AbilityBuilder.define((can, cannot) => {
        if (user.roles.includes('site_admin')) {
            can('view', 'all');
            can('manage', 'rules');
            can('manage', 'report');
            can('manage', 'users');
        } else if (user.roles.includes('admin')) {
            cannot('view', 'configure');
            can('manage', 'rules');
            can('manage', 'report');
            can('manage', 'users');
        } else {
            cannot('view', 'configure');
            // Rules related abilities of a organization user
            cannot('manage', 'rules');
            can('read', 'rules');

            // Rules related abilities of a organization user
            cannot('manage', 'report');
            cannot('manage', 'users');
        }
    });
};

const userAbilities = user => defineAbilitiesFor(user);
export default userAbilities;
