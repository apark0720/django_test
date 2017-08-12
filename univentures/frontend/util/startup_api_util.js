export const fetchStartups = () => (
    $.ajax({
        method: 'GET',
        url: '/api/startups'
    })
);

export const fetchStartup = id => (
    $.ajax({
        method: 'GET',
        url: `/api/startups/${id}`
    })
);

export const createStartup = startup => (
    $.ajax({
        method: 'POST',
        url: 'api/startups',
        data: { startup }
    })
)

export const updateStartup = startup => (
    $.ajax({
        method: 'PATCH',
        url: `/api/startups/${id}`,
        data: { startup }
    })
)