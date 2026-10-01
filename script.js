function generateIntroduction() {

    let name = document.getElementById("name").value;
    let place = document.getElementById("place").value;
    let course = document.getElementById("course").value;
    let percentage = document.getElementById("percentage").value;
    let school = document.getElementById("school").value;
    let hobby = document.getElementById("hobby").value;
    let achievement = document.getElementById("achievement").value;
    let family = document.getElementById("family").value;
    let shortGoal = document.getElementById("shortGoal").value;
    let longGoal = document.getElementById("longGoal").value;
    let strength = document.getElementById("strength").value;
    let weakness = document.getElementById("weakness").value;

    let introduction = `Good morning everyone.

My name is ${name}, and I am from ${place}.

Currently, I am pursuing ${course}. I scored ${percentage} in my last semester, which reflects my dedication and hard work towards my studies.

I completed my 10th standard from ${school}.

Talking about my hobbies, I enjoy ${hobby}. I have also achieved ${achievement}. This experience helped me develop confidence, discipline, and teamwork.

There are ${family} in my family.

My short-term goal is to ${shortGoal}.

My long-term goal is to ${longGoal}.

My strengths are ${strength}. I am always ready to learn new things and improve myself.

My weakness is ${weakness}. However, I am working on improving myself.

I believe that "Be Better and Do Better" is the key to continuous improvement and success.

That's all about me.

Thank you for giving me this opportunity to introduce myself.`;

    document.getElementById("result").innerText = introduction;
}


function copyIntroduction() {

    let text = document.getElementById("result").innerText;

    navigator.clipboard.writeText(text);

    alert("Introduction copied successfully! ✅");
}function generateIntroduction() {

    let name = document.getElementById("name").value;
    let place = document.getElementById("place").value;
    let course = document.getElementById("course").value;
    let percentage = document.getElementById("percentage").value;
    let school = document.getElementById("school").value;
    let hobby = document.getElementById("hobby").value;
    let achievement = document.getElementById("achievement").value;
    let family = document.getElementById("family").value;
    let shortGoal = document.getElementById("shortGoal").value;
    let longGoal = document.getElementById("longGoal").value;
    let strength = document.getElementById("strength").value;
    let weakness = document.getElementById("weakness").value;

    let introduction = `Good morning everyone.

My name is ${name}, and I am from ${place}.

Currently, I am pursuing ${course}. I scored ${percentage} in my last semester, which reflects my dedication and hard work towards my studies.

I completed my 10th standard from ${school}.

Talking about my hobbies, I enjoy ${hobby}. I have also achieved ${achievement}. This experience helped me develop confidence, discipline, and teamwork.

There are ${family} in my family.

My short-term goal is to ${shortGoal}.

My long-term goal is to ${longGoal}.

My strengths are ${strength}. I am always ready to learn new things and improve myself.

My weakness is ${weakness}. However, I am working on improving myself.

I believe that "Be Better and Do Better" is the key to continuous improvement and success.

That's all about me.

Thank you for giving me this opportunity to introduce myself.`;

    document.getElementById("result").innerText = introduction;
}


function copyIntroduction() {

    let text = document.getElementById("result").innerText;

    navigator.clipboard.writeText(text);

    alert("Introduction copied successfully! ✅");
}