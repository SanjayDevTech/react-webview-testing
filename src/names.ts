const names = [
    'Sanjay',
    'Shivani',
    'Surya',
    'Rohinth',
    'Arun',
    'Aravind',
    'Ajith',
];

let index = 0;

export default function computeName() {
    return names[index++ % names.length];
}
