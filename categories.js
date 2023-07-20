const Categories = {
    level: {
        label: "Level",
        options: [
            {id: 1, label: "Primary", value: "primary"},
            {id: 2, label: "Secondary", value: "secondary"}, 
            {id: 3, label: "Advanced", value: "advanced"},
        ]
    },
    religion: {
        label: "Religion",
        options: [
            {id: 1, label: "Mixed", value: "all"},
            {id: 2, label: "Islamic", value: "islamic"}, 
            {id: 3, label: "Christian", value: "christian"}, 
        ]
    },
    gender: {
        label: "Gender",
        options: [
            {id: 1, label: "Mixed", value: "all"},
            {id: 2, label: "Boys", value: "boys"}, 
            {id: 3, label: "Girls", value: "girls"}, 
        ]
    },
    ownership: {
        label: "Ownership",
        options: [
            {id: 1, label: "Public", value: "public"}, 
            {id: 2, label: "Private", value: "private"}
        ]
    },
    regions: {
        label: "Regions",
        options: [
            {id: 1, label: "Arusha", value: "arusha"},
            {id: 2, label: "Dodoma", value: "dodoma"},
        ]
    },
    occupation: {
        label: "Accommodation", 
        options: [
            {id:1, label: "Boarding", value: "boarding"},
            {id:2, label: "Day", value: "day"},
            {id:3, label: "Both", value: "all"}
        ]},
    school_fee: {
        label: "School fee", 
        options: [
            {id:1, label: "< 100k", value: "1750000"},
            {id:2, label: "< 500k", value: "50000"},
            {id:3, label: "< 1M", value: "78888"},
            {id:4, label: "< 2M", value: "1248"}
        ]
    }}


export default Categories;
