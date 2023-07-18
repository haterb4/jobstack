const links = [
    {
        name: 'Find Jobs',
        href: '/jobs',
        dropdown: true,
        size: 'large',
        sublinks: [
            {
                header: 'Jobs Listing',
                links: [
                    {name: 'About Us', href: '/about', dropdown: false,},
                    {name: 'Contact', href: '/about', dropdown: false,},
                    {name: 'Job Packages', href: '/about', dropdown: false,},
                    {name: 'How It Works', href: '/about', dropdown: false,},
                    {name: "FAQ's", href: '/about', dropdown: false,},
                    {name: "Terms and Conditions", href: '/about', dropdown: false,},
                    {name: "404 page", href: '/about', dropdown: false,},
                ]
            },
            {
                header: 'Jobs Single',
                links: [
                    {name: 'List Jobs', href: '/about', dropdown: false,},
                    {name: 'Freelancer Job', href: '/about', dropdown: false,},
                    {name: 'Find Job', href: '/about', dropdown: false,},
                    {name: 'Recent Jobs', href: '/about', dropdown: false,},
                    {name: "Engeenier", href: '/about', dropdown: false,},
                    {name: "Health & care", href: '/about', dropdown: false,},
                    {name: "computer science", href: '/about', dropdown: false,},
                ]
            },
            {
                header: 'Jobs By Types',
                links: [
                    {name: 'Education', href: '/about', dropdown: false,},
                    {name: 'Bank & finance', href: '/about', dropdown: false,},
                    {name: 'industrie', href: '/about', dropdown: false,},
                    {name: 'Energy', href: '/about', dropdown: false,},
                    {name: "Estate", href: '/about', dropdown: false,},
                    {name: "Automotive jobs", href: '/about', dropdown: false,},
                    {name: "Administration", href: '/about', dropdown: false,},
                ]
            }
            ,
            {
                header: 'Jobs By Cities',
                links: [
                    {name: 'Post a Job', href: '/new-job', dropdown: false,},
                    {name: 'Contracts', href: '/job-contract', dropdown: false,},
                    {name: 'Premium', href: '/job-premium', dropdown: false,},
                    {name: 'Recruitement', href: '/recruitement', dropdown: false,},
                    {name: "add Job Evaluatuion", href: '/job-evaluation', dropdown: false,},
                    {name: "job suggestion", href: '/job-suggest', dropdown: false,},
                    {name: "Human ressources", href: '/hr', dropdown: false,},
                ]
            }
        ]
    },
    {
        name: 'Employers',
        href: '/employers-list',
        dropdown: false,
    },
    {
        name: 'Candidates',
        href: '/canditates',
        dropdown: false,
    },
    {
        name: 'Blog',
        href: '/blog',
        dropdown: false,
    },
    {
        name: 'Pages',
        href: '/pages',
        dropdown: true,
        size: 'small',
        sublinks: [
            {
                header: 'nothing',
                links: [
                    {name: 'About Us', href: '/about', dropdown: true,},
                    {name: 'Contact', href: '/about', dropdown: false,},
                    {name: 'Job Packages', href: '/about', dropdown: true,},
                    {name: 'How It Works', href: '/about', dropdown: true,},
                    {name: "FAQ's", href: '/about', dropdown: false,},
                    {name: "Terms and Conditions", href: '/about', dropdown: false,},
                    {name: "404 page", href: '/about', dropdown: false,},
                ]
            }
        ]
    },
]

export default links