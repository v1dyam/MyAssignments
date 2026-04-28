function score(marks) {
    switch (marks) {
        case 97:
            console.log("Grade A");
            break;
        case 70:
            console.log("Grade B");
            break;
        case 50:
            console.log("Grade C");
            break;
        default:
            console.log("Fail");
    }
}

score(97);       // Grade A
score(70);       // Grade B
score(50);       // Grade C
score(30);       // Fail
