import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import * as games from '$lib/Games.json';

export const load: PageLoad = ({ params }) => {
    const game = games.default.find((entry) => entry.id === params.id);

    if (!game) {
        throw error(404, 'Game not found');
    }

    return {
        game
    };
};