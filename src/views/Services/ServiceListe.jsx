import standard from '../../assets/standard.svg';
import personalize from '../../assets/personalize.svg'
import premium from '../../assets/premium.svg'

export default [
    {
        icon: standard,
        title: "Site Vitrine Standard",
        offres: [
            "4 Pages",
            "Referencement Google",
            "Design Personnalise",
            "20% de reduction sur nos offres supplementaires",
            "10% de reduction sur nos service de design numerique"
        ]
    },
    {
        icon: personalize,
        title: "Site Web Personnalise",
        offres: [
            "Adapte a vos besoins sur mesure",
            "20% de reduction sur nos offres supplementaires",
            "10% de reduction sur nos service de design numerique"
        ],
        main: true
    },
    {
        icon: premium,
        title: "Offre Premium",
        offres: [
            "Conception",
            "Infogerance",
            "Accompagnement",
        ]
    },
]