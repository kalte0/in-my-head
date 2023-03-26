const textElement = document.getElementById('text');
        const optionButtonsElement = document.getElementById('option-buttons');
        var state = 0b0; 
        var textNodes = [ 
            {
                id: 'entry', 
                lines: [
                        {text: "It's final exam season."},
                        {text: "You are in the entry hall to the most important test of your life."},
                        {text: "The drooping wrought-iron chandelier looms above you while the ominous, wooden door looms in front of you."},
                        {text: "the air of ancient high class generally looms."},
                        {text: "This is your battleground. You, Sacha, have your pistols, your cross, and most importantly, your wooden stakes, strapped at the hip for quick access."},
                        {text: "Let's try to keep this professional, yeah?"}
                      ],
                options: [ 
                    { 
                        text: "> \"I always keep it classy.\"",
                        requiredState: null, 
                        setState: 1,
                        nextText: 'sunglasses'
                    },
                    {
                        text: "> \"Let's get this over with.\"",
                        requiredState: null, 
                        nextText: 'professionals'
                    }
                ]
            },
            {
                id: 'sunglasses',
                lines: [
                    {text: "You put on one most obnoxious pair of sunglasses. Of course.", waitForClick: true}, 
                    {text:"You’ve never been the type to enter a vampire den without your sunglasses.", waitForClick: true},
                    {text: "The doors swing open.", waitForClick: false}
                ],
                options: [ 
                    { 
                        text: "> Begin.",
                        requiredState: null, 
                        nextText: 'begin',
                    }
                ]
            },
            {
                id: 'professionals',
                lines: [ 
                    {text: "Yes. Let’s. Professionally. The vampire den awaits."},
                    {text: "The doors swing open."}
                ],
                options: [ 
                    {
                        text: "> Begin.",
                        requiredState: null, 
                        nextText: 'begin'
                    }
                ]
            },
            {
                id: 'begin', 
                lines:  [
                    {text: "The small solar is dark except for the gentle light of a fireplace. Its moving light is enough to trick the eye into seeing something in the intricate wood carvings of the room’s darkest corners. Ahead is another heavy door. Before that lies a low table with three items:"}, 
                    {text: "A pocket-sized leather book,"}, 
                    {text: "a gleaming silver dagger,"}, 
                    {text: "and a black and knotted key. "}, 
                    {text: "“That’s it? No gimmick? Just… take stuff?”"}, 
                    {text: "There’s nothing else in the room, alive or dead."}, 
                    {text: "“Score. I’ll take…”"}
                ],
                options: [ 
                    {
                        text: "> “The book, maybe it’ll show us what we’re facing.” ",
                        setState: 0b10,
                        requiredState: null, 
                        nextText: 'getBook1'
                    },
                    {
                        text: "> “The dagger. It looks sick as hell.”",
                        setState: 0b100,
                        requiredState: null, 
                        nextText: 'getDagger1'
                    },
                    {
                        text: "> “The key. It might come in handy later.”",
                        setState: 0b1000,
                        requiredState: null, 
                        nextText: 'getKey1'
                    }
                ]
            },
            {
                id: 'getBook1',
                lines: [ 
                    {text: "Your general lack of academic curiosity makes me wonder if you’ve ever lifted a textbook in your undergraduate career. I’m proud of you, Sacha, for choosing the route of scholars."},
                    {text: "“Oh, wow. Thanks.”"},
                    {text: "You open it."},
                    {text: "“It’s all… blank.”"},
                    {text: "Every page. You shut it definitively. "}
                ],
                options: [ 
                    {
                        text: "> Glance at the table.",
                        requiredState: null, 
                        nextText: 'glanceTable'
                    }
                ]
            },
            {
                id: 'getDagger1',
                lines: [ 
                    {text: "This seems to be about all the reason you need to make decisions."},
                    {text: "“Hey— I’m to the… point.”"},
                    {text: "You must find yourself very clever."},
                    {text: "“Come back when you grow a sense of humor. Or better yet, a heart.”"}
                ],
                options: [ 
                    {
                        text: "> Glance at the table.",
                        requiredState: null, 
                        nextText: 'glanceTable'
                    }
                ]
            },
            {
                id: 'getKey1',
                lines: [ 
                    {text: "Planning for the future, I see. Not something I ever thought of as your strong suit. "},
                    {text: "“I, however, always recognized your not-so hidden talent of surviving without a heart.”"} 
                ],
                options: [ 
                    {
                        text: "> Glance at the table.",
                        requiredState: null, 
                        nextText: 'glanceTable'
                    }
                ]
            },
            {
                id: 'glanceTable',
                lines: [ 
                    {text: "It seems that the other items have disappeared"},
                    {text: "“So we only get one… I’m sure we won’t regret that choice.”"},
                    {text: "Yeah… "} 
                ],
                options: [ 
                    {
                        text: "> Continue.",
                        requiredState: null, 
                        nextText: 'continue'
                    }
                ]
            },
            {
                id: 'continue',
                lines: [ 
                    {text: "You open the door at the other end of the room with some exertion. A skinny hallway, lined with ornate windows. The color of night bleeds past them, but the glass is too foggy to make out specifics. Two suits of armor face each other. A light dust covers everything."},
                    {text: "“Is the worst enemy we’re gonna face allergies? Give me some details, man.” "},
                    {text: "The door shuts with a heavy thud behind you. "}
                ],
                options: [ 
                    {
                        text: "> Inspect the suits of armor.",
                        requiredState: null, 
                        nextText: 'inspectArmor1'
                    },
                    {
                        text: "> Continue down the hall.",
                        requiredState: null, 
                        nextText: 'hall1'
                    }
                ]
            },
            {
                id: 'inspectArmor1',
                lines: [
                    {text: "The metal men stand cold and austere."},
                    {text: "Your reflection shimmers in their pointed faces. How long has the Academy used this as their final exam space?"},
                    {text: "“Who knows. They didn’t even say where we were.”"},
                    {text: "More importantly: Why are they keeping so much of this a mystery..?"},
                    {text: "“Even more importantly: Why is everything so quiet…?”"}
                ],
                options: [ 
                    {
                        text: "> Open the book.",
                        requiredState: [1, 1], 
                        nextText: 'openBook1'
                    },
                    {
                        text: "> Take out dagger.",
                        requiredState: [2, 1], 
                        nextText: "takeOutDagger1"
                    },
                    {
                        text: "> Try Key.",
                        requiredState: [3, 1], 
                        nextText: "tryKey1"
                    }
                ]
            },
            {
                id: 'openBook1',
                lines: [
                    {text: "You flip open the book. Still nothing. "}
                ],
                options: [ 
                    {
                        text: "> Leave",
                        requiredState: null, 
                        nextText: 'hall1'
                    }
                ]
            },
            {
                id: 'takeOutDagger1',
                lines: [
                    {text: "You take out your dagger. What, are you taking out your aggression on a suit of armor? "},
                    {text: "“If you aren’t careful, I’ll be taking out my aggression on you. No. I’m just… looking.”"},
                    {text: "You put the dagger away."}
                ],
                options: [ 
                    {
                        text: "> Leave",
                        requiredState: null, 
                        nextText: 'hall1'
                    }
                ]
            },
            {
                id: 'tryKey1',
                lines: [
                    {text: "You take out the key. Not sure why— as there is clearly no place to stick it. "},
                    {text: "“Oh, apologies, madam, I was actually admiring the thought of sticking this key in the side of your head.” "},
                    {text: "Good to know"}
                ],
                options: [ 
                    {
                        text: "> Leave",
                        requiredState: null, 
                        nextText: 'hall1'
                    }
                ]
            },
            {
                id: 'hall1',
                lines: [
                    {text: "“Listen, I know you want me to look around, and find shit. But I’m tired of this and I’m already tired of having you in my brain talking down to me.”"},
                    {text: "Like you haven’t already been a thorn in my side for 4 years. I’m just paying back the favor."},
                    {text: "“Learn to take a page out of my book: ‘Less bitchin, more kickin. (ass)’”"},
                    {text: "That’s somehow clumsier than your usual one-liners. "},
                    {text: "You kick the heavy door at the end of the hallway down. "},
                    {text: "The hall that follows is immense. Two staircases lead to an upper balcony, where a massive door stands. The roof is lined with massive, church-like stained glass, barely visible through the massive boughs of black cloth which have covered it. Not even the slightest trickle of moonlight makes its way in— instead, the room glows with reddish candlelight."},
                    {text: "Directly in front of it all— three stupidly hot vampires. The one in front spoke. “Well, well— look what we have here. Welcome, Sacha."},
                    {text: "Sacha— I feel like I can see where this is going. Just because they’re hot does not mean that you can get distracted here, okay? We have an exam to pass. "}
                ],
                options: [ 
                    {
                        text: "> “I’m not stupid.”",
                        requiredState: null, 
                        nextText: 'notstupid'
                    }
                ]
            },
            {
                id: 'notstupid',
                lines: [
                    {text: "The two vampires flanking her began to wail “She’s graduating? No! We’ve been waiting for her!”"},
                    {text: "“All this time!"},  
                    {text: "“Wh-what, for me?”"},
                    {text: "Jesus Christ."},
                    {text: "“Of course we have, Sacha. You really stick out from the crowd. My name is Carmilla. It's a pleasure to meet you.”"},
                    {text: "“Are you all, like, uhm, sisters or something?”"},
                    {text: "“What? No. Me and Nadine”"},
                    {text: "“Hi,” the one to her right said."},
                    {text: "“And Drucilla is my ex.”"},
                    {text: "“It’s fine, I’m over it,” the one to her left said."},
                    {text: "“And we’re all still friends. Keep up. More importantly: We don’t want to fight you. You’ve caught our eye for other reasons. You’re one of the academy’s greatest hunters. But… you know better than anyone that they've never valued you. I mean— didn’t it take you years just to be accepted into the program?”"},
                    {text: "Sacha, I think you should just start attacking them."}
                ],
                options: [ 
                    {
                        text: "> Keep listening.",
                        requiredState: null, 
                        nextText: 'listenToVamps'
                    },
                    {
                        text: "> Start attacking.",
                        requiredState: null, 
                        nextText: 'attack'
                    }
                ]
            },
            {
                id: 'listenToVamps',
                lines: [
                    {text: "“And your little assistant, talking into your head? She’s not helping you either. She’s always been trying to one-up you, and this time is no different than before. Wouldn’t you rather be somewhere where you’re properly valued?”"},
                    {text: "“Come join us! Please! Your skills with a stake are unmatched!~”"},
                    {text: "Sacha, come on. This could not more obviously be a ploy. You want to graduate, right?"},
                    {text: "“...”"},
                    {text: "Sacha. This is ridiculous. It’s either graduate, or be a traitor forever with some douchey vampires. You may be annoying, but the only reason I care that much is because at least I know that you have morals."},
                    {text: "“Well? What will it be, Sacha?”"}
                ],
                options: [ 
                    {
                        text: "> Be a traitor forever.",
                        requiredState: null, 
                        nextText: 'traitorize'
                    },
                    {
                        text: "> Graduate", 
                        requiredState: null, 
                        nextText: 'attack'
                    }
                ]
            },
            {
                id: 'traitorize',
                lines: [
                    {text: "“...”"}, 
                    {text: "Sacha? Are you actually going to cut me off— you're actually— Sacha!"},
                    {text: "“Finally, some quiet.”"},
                    {text: "Carmilla smiles. “Glad to see you’ve made up your mind. But… you have a lot more to learn.”"},
                    {text: "Hngh--!!"}
                ],
                options: [ 
                    {
                        text: "> Die",
                        requiredState: null, 
                        nextText: 'traitorDeath'
                    }
                ]
            },
            {
                id: 'attack',
                lines: [
                    {text: "“Sorry, girls. You see, I’m actually pretty happy where I am.”"},
                    {text: "Their expressions sour. "},
                    {text: "“I see…”"},
                    {text: "Sacha— duck!"}, 
                    {text: "Nadine lashes out with impossibly sharp claws— slicing a few hairs from the top of your head. You quickly take advantage, sweeping her legs. She collapses the ground, leaving you just enough time for a well placed attack with… "}
                ],
                options: [ 
                    {
                        text: "> “The dagger!”",
                        requiredState: [2, 1],
                        setState: 0b10000,
                        nextText: 'daggerStab'
                    },
                    {
                        text:  "> “The stake!”",
                        requiredState: null, 
                        nextText: 'stakeStab'
                    }
                ]
            },
            {
                id: 'daggerStab',
                lines: [
                    {text: "You whip out the shiny dagger, and skillfully drive it into Carmilla's heart. "},
                    {text: "She looks at you through half lidded eyes and gives a slow, bubbling laugh."},
                    {text: "“You really thought that would be enough to kill me?”"}, 
                    {text: "She pulls the dagger out, letting it dangle from her thumb and pointer finger, before dropping it to the ground. "}, 
                    {text: "“Seems we were wrong. You really do have a lot more to learn.”"}, 
                    {text: "She swipes again, and this time, the other two are poised to strike as well. "}, 
                    {text: "Sacha— to the right, use the chair as cover."}
                ],
                options: [ 
                    {
                        text: "> Dive",
                        requiredState: null, 
                        setState: 0b100000,
                        nextText: 'dive'
                    }
                ]
            },
            {
                id: 'stakeStab',
                
                lines: [
                    {text: "You skillfully drive a stake into Carmilla's heart."},
                    {text: "She looks at you through half lidded eyes and gives a slow, bubbling laugh."},
                    {text: "“You really thought that would be enough to kill me?”"}, 
                    {text: "She pulls the dagger out, letting it dangle from her thumb and pointer finger, before dropping it to the ground. "}, 
                    {text: "“Seems we were wrong. You really do have a lot more to learn.”"}, 
                    {text: "She swipes again, and this time, the other two are poised to strike as well. "}, 
                    {text: "Sacha— to the right, use the chair as cover."}
                ],
                options: [ 
                    {
                        text: "> Dive",
                        requiredState: null, 
                        nextText: "dive"
                    }
                ]
            },
            {
                id: 'dive',
                lines: [
                    {text: "You dive and wield a padded wooden chair as a makeshift shield"},
                    {text: "Glad to see you’ve overcome your baser instincts."},
                    {text: "“Careful, or I might just change my mind. Where’s our exit?”"},
                    {text: "That would be the heavy door at the top of the stairs."}
                ],
                options: [ 
                    {
                        text: "> Just the right size for the key which you possess",
                        requiredState: [3, 1],
                        nextText: "yesKey"
                    },
                    {
                        text: "> Just the right size for the key which you left in the other room.",
                        requiredState: [3, 0],
                        nextText: "noKey"
                    }
                ]
            },
            {
                id: 'yesKey',
                lines: [
                    {text: "But—"},
                    {text: "And now you’re already running to the door. There’s more to examine, Sacha— we should measure our options here."}
                ],
                options: [ 
                    {
                        text: "> Run faster",
                        requiredState: null, 
                        nextText: "runFaster"
                    }
                ]
            },
            {
                id: 'runFaster',
                lines: [
                    {text: "We’re supposed to be working together, and you’re not even listening to me—"},
                    {text: "“Stop nagging me, Emil, I—         Hng—”"},
                    {text: "A cold, sharp pain through your stomach, and then Carmilla's cold, familiar voice:"},
                    {text: "“Little hunter, you should know by now that we always come in packs.”"},
                    {text: "There are far more than 3 vampires surrounding you."},
                    {text: "It’s only a few moments before they descend upon you."},
                    {text: "Your vision fades to black as you are torn apart."}
                ],
                options: [ 
                    {
                        text: "> Die.",
                        requiredState: null, 
                        nextText: "moralDeath"
                    }
                ]
            },
            {
                id: 'noKey',
                lines: [
                    {text: "We should have chosen the other option, I knew it. I had a feeling in my gut the key would be important, I swear I did."}
                ],
                options: [ 
                    {
                        text: "> “Like hell you did.”",
                        requiredState: null, 
                        nextText: "likeHellYouDid"
                    }
                ]
            },
            {
                id: 'likeHellYouDid',
                lines: [
                    {text: "Well you didn’t grab the key either, genius."},
                    {text: "“We’re both idiots, Emil, does that make you happy? Now— can you stop wallowing and help me?”"},
                    {text: "A hand grips the front of your shirt, dragging you away from the couch with inhuman strength. All you can do is kick and struggle." },
                    {text: "Carmilla's voice is smooth and cold like ancient silk. “Little hunter, you should know by now that we always come in packs.”"},
                    {text: "There are far more than 3 vampires surrounding you."}, 
                    {text: "It’s only a few moments before they descend upon you. "}, 
                    {text: "Your vision fades to black as you are torn apart. "}
                ],
                options: [ 
                    {
                        text: "> Die.",
                        requiredState: null, 
                        nextText: "moralDeath"
                    }
                ]
            },
            {
                id: 'traitorDeath',
                lines: [
                    {text: "“... eughghg…”"},
                    {text: "“ACK!”"},
                    {text: "“Did you just <em>slap</em> me?”"},
                    {text: "“Yes. For cutting me off. And joining the side of evil.”"},
                    {text: "“Fuck me. We just failed. Oh my god… we failed out of St. Andrews Vampire Hunting Academy.”"},
                    {text: "“Well.. About that— We didn’t actually fail. Professor Charon said we can try again.”"},
                    {text: "“You mean we get a second shot?”"},
                    {text: "“More than a second shot, actually. We can try as many times as we want.”"}
            ],
                options: [ 
                    {
                        text: "> Shit",
                        requiredState: null,
                        nextText: "shit"
                    }
                ]
            },
            {
                id: 'moralDeath',
                lines: [
                    {text: "“... eughghg…”"},
                    {text: "“Careful, Sacha. You’re still recovering. That would have been enough to kill a human.”"},
                    {text: "“Good thing I’m not human… But— What the hell do you care, Emil? We just failed! Oh my god… we failed out of St. Andrews Vampire Hunting Academy."},
                    {text: "“Well.. About that—”"}
                ],
                options: [ 
                    {
                        text: "> “What happened?”",
                        requiredState: [3, 1], 
                        nextText: "hadKey"
                    },
                    {
                        text: "> “What happened?”",
                        requiredState: [3, 0], 
                        nextText: "didntHaveKey"
                    }
                ]
            },
            {
                id: 'hadKey',
                lines: [
                    {text: "“You ran headlong into danger against my recommendations. Which, I think, means I should pass and you fail.” Now, are you done wallowing?"},
                    {text: "“No.”"},
                    {text: "“As I was saying: We didn’t actually fail. Professor Charon said we can try again.”"},
                    {text: "“You mean we get a second shot?”"},
                    {text: "“More than a second shot, actually. We can try as many times as we want.”"}
                ],
                options: [ 
                    {
                        text: "> Shit",
                        requiredState: null, 
                        nextText: "shit"
                    }
                ]
            },
            {
                id: 'didntHaveKey',
                lines: [
                    {text: "“We… made a slight miscalculation. We didn’t choose the key.”"},
                    {text: "“Ah, yes— and then you stalled us and didn’t warn me about the vampire behind me.” "},
                    {text: "“Some errors were made. Now, are you done wallowing?”"},
                    {text: "“No.”"},
                    {text: "“As I was saying: We didn’t actually fail. Professor Charon said we can try again.”"},
                    {text: "“You mean we get a second shot?”"},
                    {text: "“More than a second shot, actually. We can try as many times as we want.”"}
                ],
                options: [ 
                    {
                        text: "> Shit",
                        requiredState: null,
                        nextText: "shit"
                    }
                ]
            },
            {
                id: 'shit',
                lines: [
                    {text: "“Yeah.” "},
                    {text: "“Well— we should head back. We need to train.” "}, 
                    {text: "“That’s the only catch. We can’t go home. Not until we complete the exam.” "}, 
                    {text: "“What, until we pass?”"}, 
                    {text: "“Or until we give up.” "}, 
                    {text: "“...”"},
                    {text: "“...”"}, 
                    {text: "“What did Professor Charon say?”"}, 
                    {text: "“... She said the whole reason that we’ve taken on the gift in the first place is to be better than them. You’ve been given the strength, me the ability to see and sense. So, we should ‘have the common sense to not bicker to the point we literally die.’ Her words, not mine.”"}, 
                    {text: "“This is textbook, Emil.” "}, 
                    {text: "“I’m just saying: Let’s be professional, this time.”"}, 
                    {text: "“You keep saying that, like you’re not the one provoking me.” "}, 
                    {text: "“I can’t control what I think into your brain, Sacha. This is also to ask: What was that woman talking about with you ‘not being welcome’ at the academy?”"}, 
                    {text: "“I’m not getting into this. Not with you.”"}, 
                    {text: "“... Fine.”"}
                ],
                options: [ 
                    {
                        text: "> Take 2",
                        requiredState: null,
                        nextText: "take2"
                    }
                ]
            },
            {
                id: 'take2',
                lines: [
                    {text: "Back in the entry hall. Chandelier far above, ominous door, musty, garbage room. The whole shebang. You have your pistols, your cross, your wooden stakes, and this time we know what we’re getting into. "},
                ],
                options: [ 
                    {
                        text: "> “Let’s do this.” ",
                        requiredState: null,
                        nextText: "doThis"
                    },
                    {
                        text: "> “Hold on. I’m putting on my sunglasses.”",
                        requiredState: [0, 1],
                        nextText: "sunglasses2"
                    }
                ]
            },
            {
                id: 'doThis', 
                lines: [ 
                    {text: "Yes. Let's"},
                    {text: "The doors to the trial hall swing open into a familiar room. "},
                    {text: "“It’s… the same room from before.”"},
                    {text: "Before you, on the same low table, is a book, a dagger, and a key. "},
                    {text: "“Well, then this is a piece of cake, we just need the key—” "}
                ],
                options: [ 
                    {
                        text: "> Take the key.", 
                        requiredState: null,
                        nextText: "takeKey"  
                    }
                ]
        
            },
            {
                id: 'sunglasses2', 
                lines: [ 
                    {text: "…"},
                    {text: "“I can literally FEEL you scoffing. In my brain. You are not slick.”"},
                    {text: "Into the vampire den bespectacled it is."},
                    {text: "The doors to the trial hall swing open into a familiar room. "},
                    {text: "“It’s… the same room from before.”"},
                    {text: "Before you, on the same low table, is a book, a dagger, and a key. "},
                    {text: "“Well, then this is a piece of cake, we just need the key—” "}
                ],
                options: [ 
                    {
                        text: "> Take the key.", 
                        requiredState: null,
                        nextText: "takeKey" 
                    }
                ]
        
            },
            {
                id: 'takeKey', 
                lines: [ 
                    {text: "Wait— hold on. Are you sure about that?"},
                    {text: "“What? Yeah.”"},
                    {text: "I mean.. What if it isn’t that simple? The key might get us through that door… but maybe the dagger is what we need to get past those vampires. And— what if getting through the door isn’t even our goal? We don’t even know what’s on the other side. God, if only we had access to the school library right now…"}, 
                    {text: "“Emil. It’s a locked door. And this is a key. It could literally not be more clear what we’re supposed to do with it. This is like… a puzzle for dogs with opposable thumbs.”"}, 
                    {text: "But what if the solution isn’t obvious? Maybe the book has more answers…"}
                ],
                options: [ 
                    {
                        text: "> Listen to her",
                        requiredState: null, 
                        nextText: "listenEmil" 
                    },
                    {
                        text: "> Just grab the key", 
                        requiredState: [3, 0],
                        setState: 0b10000000,
                        nextText: "grabKeyThisTime"
                    },
                    {
                        text: "> Just grab the key", 
                        requiredState: [3, 1],
                        setState: 0b10000000,
                        nextText: "grabKeyAgain"
                    }
                ]
            },
            {
                id: 'listenEmil', 
                lines: [ 
                    {text: "Yes, thank you."},
                    {text: "“Let’s try…”"},
                ],
                options: [ 
                    {
                        text: "> Dagger",
                        requiredState: [4, 1],
                        setState: 0b1000000,
                        nextText: "daggerIfStabbed" 
                    },
                    {
                        text: "> Dagger",
                        requiredState: [4, 0],
                        setState: 0b1000000,
                        nextText: "daggerIfNoStab"
                    },
                    {
                        text: "> Book",
                        requiredState: [1, 0],
                        setState: 0b100000,
                        nextText: "bookFirstTime"
                    },
                    {
                        text: "> Book", 
                        requiredState: [1, 1],
                        setState: 0b100000,
                        nextText: "bookSecondTime"
                    }
                ]
        
            },
            {
                id: 'daggerIfStabbed', 
                lines: [ 
                    {text: "“The dagger didn’t work as a weapon… but maybe it has some other use….”"},
                    {text: "That’s what I was saying. Maybe we have to use these items in unconventional ways! Do the unexpected, or maybe— "},
                    {text: "“Come on, we’re never getting out of here unless we can at least get out of this room.”"}, 
                    {text: "Fine."}
                ],
                options: [ 
                    {
                        text: "> Continue.", 
                        requiredState: null,
                        nextText: "postSecondChoice" 
                    }
                ]
        
            },
            {
                id: 'daggerIfNoStab', 
                lines: [ 
                    {text: "“We can try the dagger out this time, yeah?”"},
                    {text: "Maybe it’ll work better than our stake against those vampires, or—"},
                    {text: "No, maybe…"},
                    {text: "“Come on, We’re never getting out of here unless we can at least get out of this room.”"}, 
                    {text: "Fine."}
                ],
                options: [ 
                    {
                        text: "> Continue.", 
                        requiredState: null,
                        nextText: "postSecondChoice" 
                    }
                ]
        
            },
            {
                id: 'bookFirstTime', 
                lines: [ 
                    {text: "“Let’s see what it says, yeah?”"},
                    {text: "Fine."},
                    {text: "“And…”"},
                    {text: "It’s…"},
                    {text: "“Completely blank.” "},
                    {text: "… You know, I did have a feeling the dagger would’ve been better. "},
                    {text: "“Are you going to do this every time?”"},
                    {text: "Shut up."},
                ],
                options: [ 
                    {
                        text: "> Continue.", 
                        requiredState: null,
                        nextText: "postSecondChoice" 
                    }
                ]
        
            },
            {
                id: 'bookSecondTime', 
                lines: [ 
                    {text: "“Let’s try this again. Maybe there was something we missed last time.” "},
                    {text: "Perhaps under a certain light it will look different…"} 
                ],
                options: [ 
                    {
                        text: "> Continue.", 
                        requiredState: null,
                        nextText: "postSecondChoice" 
                    }
                ]
        
            },
            {
                id: 'grabKeyThisTime', 
                lines: [ 
                    {text: "“Okay, this is an easy choice that you’re (predictably) overthinking and I’m not wasting any more time.”"},
                    {text: "There’s just no way this can be as simple as we think it is."} 
                ],
                options: [ 
                    {
                        text: "> Continue.", 
                        requiredState: null,
                        setState: 0b10000000,
                        nextText: "postSecondChoice" 
                    }
                ]
        
            },
            {
                id: 'grabKeyAgain', 
                lines: [ 
                    {text: "“Okay, this is an easy choice that you’re (predictably) overthinking and I’m not wasting any more time.”"},
                    {text: "Well, it’s an easy choice that got you killed last time, so have fun with that."} 
                ],
                options: [ 
                    {
                        text: "> Continue.",
                        requiredState: null, 
                        setState: 0b10000000,
                        nextText: "postSecondChoice" 
                    }
                ]
        
            },
            {
                id: 'postSecondChoice', 
                lines: [ 
                    {text: "The other items disappear. You go to the other side, entering the hallway."},
                    {text: "“Are those… trees?”"},
                    {text: "A dense growth of pine trees press against the windows, covering any light that might have come through. Otherwise, the hallway seems unchanged, including the austere suits of armor."} 
                ],
                options: [ 
                    {
                        text: "> Inspect Armor", 
                        requiredState: null,
                        nextText: "inspectArmor" 
                    },
                    {
                        text: "> Continue.",
                        requiredState: null,
                        nextText: "hall2"
                    }
                ]
        
            },
            {
                id: 'inspectArmor', 
                lines: [ 
                    {text: "You can see your reflection in its weary gaze. "},
                    {text: "…"},
                    {text: "Why have you stopped?"},
                    {text: "“Oh, uhm— it’s nothing. Shut up. I’m thinking.”"}, 
                    {text: "That’s new. What about?"}, 
                    {text: "“... Nothing. About how I can’t wait to get out of here and away from you.” "}, 
                    {text: "The feeling is mutual. "}
                ],
                options: [ 
                    {
                        text: "> Open the book.",
                        requiredState: [5, 1],
                        nextText: 'openBook2'
                    },
                    {
                        text: "> Take out dagger.",
                        requiredState: [6, 1],
                        nextText: "takeOutDagger2"
                    },
                    {
                        text: "> Try Key.",
                        requiredState: [7, 1],
                        nextText: "tryKey2"
                    },
                    {
                        text: "> Return", 
                        requiredState: null,
                        nextText: "" 
                    }
                ]
        
            },
            {
                id: 'openBook2', 
                lines: [ 
                    {text: "The pages are still empty."},
                    {text: "“Come on… This whole book thing was your idea. Don’t you have any… you know… ideas?”"},
                    {text: "I think it’ll become clear how and when we need this. Until then… I’m not sure."}
                ],
                options: [ 
                    {
                        text: "> Continue.", 
                        requiredState: null,
                        nextText: "hall2" 
                    }
                ]
        
            },
            {
                id: 'takeOutDagger2', 
                lines: [ 
                    {text: "“I’m not gonna entertain the thought.”"},
                    {text: "Of what?"},
                    {text: "“Stabbery.”"},
                    {text: "How groundbreaking."}
                ],
                options: [ 
                {
                        text: "> Continue.", 
                        requiredState: null,
                        nextText: "hall2" 
                    }
                ]
        
            },
            {
                id: 'tryKey2', 
                lines: [ 
                    {text: "There’s no place to use this. "}
                ],
                options: [ 
                    {
                        text: "> Continue.",
                        requiredState: null, 
                        nextText: "hall2" 
                    }
                ]
        
            },
            {
                id: 'hall2', 
                lines: [ 
                    {text: "“We don’t have time to mess around with metal men.”"},
                    {text: "“Let me see… Absolutely not. If I listen to you I’m going to stare at doorknobs looking for solutions until my brain leaks out of my ears.”"},
                    {text: "I highly doubt that. "}, 
                    {text: "You push open the doors to the trial room."},
                    {text: "“Hello, again, ladies. Oop—”"},
                    {text: "One of them swings at you with a huge, curved sword, and swings it directly at your neck. Luckily, you back-bend away just in time to avoid it. "},
                    {text: "Carmilla smirks. “Sorry, we thought about trying to seduce you again, but thought it would be best to cut straight to the chase.”"},
                    {text: "“Wouldn’t want it any other way,” you reply."},
                    {text: "You return the favor by— holy shit. Is that a handstand? You kick the sword from her grip, and then grab it in midair. I didn’t know you could do that."},
                    {text: "“Vampire powers, Emil. They help quite a bit.”"}, 
                    {text: "You use your newly acquired sword to block their next attack."}
                ],
                options: [ 
                    {
                        text: "> “What next?”", 
                        requiredState: [7, 1],
                        nextText: "whatNextKey" 
                    },
                    {
                        text: "> “What next?”",
                        requiredState: [7, 0],
                        nextText: "whatNextNoKey" 
                    }
                ]
        
            },
            {
                id: 'whatNextKey',
                lines: [ 
                    {text: "You should probably get to that door. But first, you have to get through those vampires."}, 
                    {text: "“Now, you see, that's actually our <em>problem</em>, Emil.”"}, 
                    {text: "You buy yourself some room with a swipe of your blade."},
                    {text: "A hit. Another hit. The vampires close in. Your attacks are only minor setbacks for them."},
                    {text: "They laugh in your face as you are backed into a corner. You try to make a break for it."},
                    {text: "But they catch you."},
                    {text: "They always catch you."}
                ],
                options: [
                    {
                        text: "> Die.",
                        requiredState: null,
                        nextText: "die2"
                    }
                ]
            },
            {
                id: 'whatNextNoKey',
                lines: [ 
                    {text: "Well, we don't have a key to get through the door..."}
                ],
                options: [
                    {
                        text: "> “Let's try the dagger”", 
                        requiredState: [6, 1],
                        nextText: "whatNextDagger"
                    },
                    {
                        text: "> “I have no clue what to do...”", 
                        requiredState: [6, 0],
                        nextText: "whatNextBook"
                    }
                ]
            },
            {
                id: 'whatNextDagger',
                lines: [ 
                    {text: "You take out your dagger."}, 
                    
                ],
                options: [
                    {
                        text: "> You plunge the gleaming dagger into the vampire's chest.",
                        requiredState: [4, 0],
                        nextText: "plungeFirst"
                    },
                    {
                        text: "> You plunge the gleaming dagger into the vampire's chest.",
                        requiredState: [4, 1],
                        nextText: "plungeSecond"
                    }
                ]
            },
            {
                id: 'plungeFirst', // if not stabbed before. 
                lines: [
                    {text: "We didn't get a chance to try this before. Maybe this is it-- maybe this is the solution to all our problems."},  
                    {text: "Carmilla smiles."},  
                    {text: "“Oh, little hunter... If you think I can feel that little thing you are sorely mistaken.”"},
                    {text: "“...!”"},
                    {text: "“GraAGh—”"},
                    {text: "She stabs you through with a set of impossibly sharp nails. Your vision fades to black."}
                ],
                options: [ 
                    {
                        text: "> Die.", 
                        requiredState: null, 
                        nextText: "die2"
                    }
                ]
            },
            {
                id: 'plungeSecond', // if stabbed before. 
                lines: [
                    {text: "Maybe this is all one long exercise in futility. We try the dagger again, even though it did nothing before. Maybe this time will be different."},  
                    {text: "Carmilla smiles."},  
                    {text: "“Oh, little hunter... If you think I can feel that little thing you are sorely mistaken.”"},
                    {text: "Carmilla stabs you through with a set of impossibly sharp nails. Your vision fades to black."}
                ],
                options: [ 
                    {
                        text: "> Die.", 
                        requiredState: null, 
                        nextText: "die2"
                    }
                ]
            },
            {
                id: 'whatNextBook',
                lines: [ 
                    {text: "Your eyes dart around the room. I look too, but— there's nothing. No exit. No dice."}, 
                    {text: "The vampires take advantage of our panic."},
                    {text: "Carmilla stabs you through with a set of impossibly sharp nails. Your vision fades to black."}
                ],
                options: [
                    {
                        text: "> Die.",
                        requiredState: null,
                        nextText: "die2"
                    }
                ]
            },
            {
                id: 'die2', 
                lines: [ 
                    {text: "“AGh- God. They went for the nose. That’s my best feature.” "},
                    {text: "“Yeah…”"},
                    {text: "“What?”"}, 
                    {text: "“Nothing. Sacha— you just keep running into the fray without thinking. You have to be more strategic!” "},
                    {text: "“Of course— like I’m the only one messing up. You’re supposed to be my extra set of eyes!”"},
                    {text: "“I—”"},
                    {text: "“I don’t want to be stuck here any longer than I have to be with you. And if we keep nitpicking everything and waiting for our professors to come and kiss our boo-boos we really will be here forever.”"},
                    {text: "“I’m not— what?”"},
                    {text: "“Let’s just get this show on the road.” "}, 
                    {text: "“F-Fine! Let’s road this show.”"},
                ],
                options: [ 
                    {
                        text: "> Begin again", 
                        requiredState: null,
                        nextText: "beginAgain" 
                    }
                ]
        
            },
            {
                id: 'beginAgain', 
                lines: [ 
                    {text: "It’s just… don’t you think…"},
                    {text: "That something’s off?"},
                    {text: "Like every time we go through… "}, 
                    {text: "Things keep getting more strange?"},
                    {text: "None of it makes any sense..."}
                ],
                options: [ 
                    {
                        text: "> The doors open one more time.", 
                        requiredState: null,
                        nextText: "hall3" 
                    }
                ]
            },
            {
                id: 'hall3', 
                lines: [ 
                    {text: "I’ve lost count of the cycles at this point."},
                    {text: "“Are you kidding me?”"},
                    {text: "The room is packed like a vampire nightclub."},
                    {text: "You pull out your guns and begin shooting, desperately. Shot after shot launches into the crowd. A few go down, but it’s not enough. You back up, and they flood into the hallway."},
                    {text: "“Any hints? Ideas, Emil? Come on! Feel like I’m doing all the work here.”"},
                    {text: "I don’t know any more than you. I’ve run through all the possibilities. There’s nothing we can do."},
                    {text: "“Is this you giving up, Emil?”"},
                    {text: "Don’t be stupid. I need to pass this just as badly as you. One of the vampires swipes at your arm. The imbalance gives you enough time to sink a stake into her heart. It takes two deep hits for her to actually go down— these vampires seem impossibly strong."}, 
                    {text: "“No— you don’t! You’re some snooty golden girl who’s had everything handed to you. You’ve *always* been on top.”"}, 
                    {text: "I have no idea what you’re referring to. You send another to dust with a firm maneuver."}, 
                    {text: "“I’ve had to work for everything. Just to get into this school— while you just get it all effortlessly.”"}, 
                    {text: "You think I haven’t worked to be where I am?"}, 
                    {text: "“You’re every teacher’s pet. Everyone fawns over you.” "}, 
                    {text: "What makes you think—"}, 
                    {text: "You trip on the foot of the suit of armor behind you, the force of impact to the floor knocking the wind out of you. You try to get to your feet, but you feel a sharp pain in your side. The culprit: a heavy kick to your ribs."}, 
                    {text: "“Kicking? Again!?” "}, 
                    {text: "The vampires kick you until you begin to cough up blood, leaving you no room or air to stand up. The pain must be unimaginable."}, 
                ],
                options: [ 
                    {
                        text: "> Die.", 
                        requiredState: null,
                        nextText: "die3" 
                    }
                ]
            },
            {
                id: 'die3', 
                lines: [ 
                    {text: "“...”"},
                    {text: "“...”"},
                    {text: "“...”"},
                    {text: "“...”"}, 
                    {text: "“...”"},
                    {text: "“...”"},
                    {text: "“Good aftermidnight, ladies.”"}, 
                    {text: "“Professor Charon?”"}, 
                    {text: "“I’ve come with some news and some advice. That just concluded your 100th run. Congratulations! I believe you’ve made it onto the school’s hall of fame for that.”"}, 
                    {text: "“Wait, really?”"}, 
                    {text: "“Yes. This is the longest it’s taken anybody to pass the exam in the history of the academy.”"}, 
                    {text: "“Ah…” "}, 
                    {text: "“... Girls— I’m not supposed to give you any hints, but—”"}, 
                    {text: "“Well, I think that we could really use one here, so—” "}, 
                    {text: "“Emil, shut up.” "}, 
                    {text: "“You know, you two are a lot more similar than you think.”"}, 
                    {text: "“I am nothing like Sach-”"}, 
                    {text: "“Best of luck, girls.”"}
                ],
                options: [ 
                    {
                        text: "> “...”", 
                        requiredState: null,
                        nextText: "difficultTalks" 
                    }
                ]
            },
            {
                id: 'difficultTalks', 
                lines: [ 
                    {text: "“Do you really believe what you said earlier? About me?”"},
                    {text: "“Yeah. Yeah, I do. You’re like top of the class. Everyone loves you, Emil.”"},
                    {text: "“I don’t know what makes you think that. I don’t really like… uhm… Have friends. Or like… Talk to people.”"},
                    {text: "“You—” "},
                    {text: "“I mean— other than you. I don’t talk to people other than you.”"},
                    {text: "“...”"},
                    {text: "“Listen, if I ever made you feel like you didn’t belong at the academy, I—” "},
                    {text: "“No. You didn’t. Never you.” "},
                    {text: "“... But I—”"},
                    {text: "“We’ve never gotten off on the right foot, but… I like to think we know where the other stands. It’s nice to know the top of the class still views me as a threat.”"}, 
                    {text: "“...”"}, 
                    {text: "“We should get back into this thing. 100th time’s a charm?”"}, 
                    {text: "“Of course.” "}, 
                ],
                options: [ 
                    {
                        text: "> Begin again.",
                        requiredState: null,
                        nextText: "start3"
                    }
                ]
            },
            {
                id: 'start3', 
                lines: [ 
                    {text: "This time was nothing like we could have guessed. For one— the entry door opened straight into the windowed hallway. Same suits of armor, same door at the end. Except this hallway seemed treacherously long and still. The windows were an opaque red, which cast a shadowless red light on everything. On the floor, haphazardly, lay three familiar items: Key, dagger, and book."}
                ],
                options: [ 
                    {
                        text: "> Key",
                        requiredState: null,
                        nextText: "postPickup"
                    },
                    {
                        text: "> Dagger",
                        requiredState: null,
                        nextText: "postPickup"
                    },
                    {
                        text: "> Book",
                        requiredState: null,
                        nextText: "postPickup"
                    }
                ]
            },
            {
                id: 'postPickup', 
                lines: [ 
                    {text: "You pick it up, but the rest are all still there. You pick them all up, carefully."},
                    {text: "“So we get all of them… huh?” "}
                ],
                options: [ 
                    {
                        text: "> Continue.",
                        requiredState: null,
                        nextText: "repeatHallwayFirst"
                    }
                ]
            },
            {
                id: 'repeatHallwayFirst', 
                lines: [ 
                    {text: "You walk to the door at the other end and brace yourself, readying your stakes. But when you open the door- you find yourself back in the same hallway."},
                    {text: "“Oh… No. Nononono. There has to be a way out. There has to be somewhere to go.”"}
                ],
                options: [ 
                    {
                        text: "> Go through the door.",
                        requiredState: null,
                        nextText: "repeatHallwaySecond"
                    }
                ]
            },
            {
                id: 'repeatHallwaySecond', 
                lines: [ 
                    {text: "“This can’t be happening.”"},
                    {text: "Sacha."},
                    {text: "“It all just goes on forever.” "},
                    {text: "<em>Sacha.</em>"}
                ],
                options: [ 
                    {
                        text: "> Go through the door.",
                        requiredState: null,
                        nextText: "repeatHallwayThird"
                    }
                ]
            },
            {
                id: 'repeatHallwayThird', 
                lines: [ 
                    {text: "Sacha, get yourself together. We’re getting through this."},
                    {text: "Believe me just this one time: We’re going to be okay. "},
                    {text: "“I’m so tired of this…”"},
                    {text: "And yet you refuse to quit."},
                    {text: "“... The academy is all I have, Emil. It’s all I’ve ever worked for.” "}, 
                    {text: "… There’s something I need to tell you. "}, 
                    {text: "What"}, 
                    {text: "I’m not top of the class. I slipped from that position long ago. think I’m smart, but— I’ve been slipping for years. I think you’re the only person who still thinks I’m worth something."}
                ],
                options: [ 
                    {
                        text: "> Keep running",
                        requiredState: null,
                        nextText: "isntEnd"
                    }
                ]
            },
            {
                id: 'isntEnd', 
                lines: [ 
                    {text: "That is to <em>say</em>, Sacha: Can we just act like we're on the same side, for now?"},
                    {text: "“Emil. What are we going to do if this isn’t the end?”"},
                    {text: "What?"},
                    {text: "“I mean: If we fail again.” "},
                    {text: "We won't."},
                    {text: "“What if we do? When do we quit? We’ve already taken longer on this than anybody else, ever. That’s already its own kind of failure.” "},
                    {text: "Sacha… are you… giving up? "},
                    {text: "“That’s not what I’m saying. We just don’t even know if they’re telling us the truth there. This could be a death-trap. We could be doing this forever.”"},
                    {text: "This is true... we wouldn't ever die. I suppose we're go until we grduate."},
                    {text: "“Emil.”"}, 
                    {text: "“Emil.”"},
                    {text: "I hate your fucking guts.”"},
                    {text: "Thanks."},
                    {text: "“No, like I really hate you. And I’ve hated you since the moment I saw you.”"},
                    {text: "I hate you too. "},
                    {text: "“But do you… like. Hate me enough that you would quit? If this wasn’t the ending to the puzzle? Would you just not graduate, rather than spend a possible eternity with me?”"}, 
                    {text: "That’s what you’re asking?"}, 
                    {text: "“Yeah.” "}, 
                    {text: "No. I wouldn’t. "}, 
                    {text: "“Good.” "}, 
                    {text: "Oh my god."}, 
                    {text: "“What?” "}, 
                    {text: "You’re crying. There are actual tears coming out of your eyes right now."}, 
                    {text: "“Shut up.”"}, 
                    {text: "Yes, I hate you, Sacha. But if I had to spend an eternity with anyone in this life… I don’t know who else I’d pick."},
                    {text: "“... Me neither.” "},
                    {text: "The moment is just too much to bear. I almost want to vomit, but you’re finally, actually looking at the items again. It's time to find a solution this this whole thing and—"},
                    {text: "Everything went to black."}
                ],
                options: [ 
                    {
                        text: "> Open Your Eyes",
                        requiredState: null,
                        nextText: "surprise"
                    }
                ]
            },
            {
                id: 'surprise', 
                lines: [ 
                    {text: "“Surprise!”"},
                    {text: "Standing in front of us were Professor Charon, Carmilla, and her lackeys, popping dismal party-poppers. We were stunned silent."}, 
                    {text: "“Congratulations, girls! You are now officially graduates of St. Andrew’s Vampire Hunting Academy.”"}, 
                    {text: "Carmilla appeared mostly bored with the affair. “Come on, cheer up, you two. It’s over now. You’re fully fledged vampire hunters now.”"}, 
                    {text: "“Are you kidding me? We— we didn’t even open the box, we— what was the secret? What let us pass?” I stuttered."}, 
                    {text: "“Well, it wasn’t really about a puzzle. It wasn’t even about the vampires. We already knew you were two of our most qualified hunters. This was actually a test of your resolve. All you need to do is accept your role as vampire hunters forever. You two were so focused on beating each other and finishing the exam, you couldn’t truly accept your eternal roles. You still had doubts.”"},
                    {text: "“I’m sorry, that was <em>all we needed to do?</em> Oh easy as pie.” You burned with the rage of someone who had just died horrifically 100 times in quick succession."},
                    {text: "Charon gave a polite smile. “Well, we wouldn’t want to let loose vampire hunters who would use their vampiric powers to join the side of evil, right?”"},
                    {text: "“Easy as <em>fucking pie!</em>”"},
                    {text: "“Sacha, no kicking! Those came out of my paycheck.”"},
                    {text: "I remember it so clearly. When you turned to me. “...Emil, are you crying?”"},
                    {text: "“No. Maybe. Shut up. I just said the most embarrassing thing of my life.” I could hardly get out the words."}, 
                    {text: "And then you hugged me. And I convinced myself that all was fine."}
                ],
                options: [ 
                    {
                        text: "> The End",
                        requiredState: null,
                        nextText: "endCard"
                    }
                ]
            },
            {
                id: 'endCard', 
                lines: [ 
                    {text: "Thank you so much for playing!!"},
                    {text: 'Before you leave, please take note of the number on the last line!'},
                    {text: "(This number is used to store which decisions you made over the course of the story,"},
                    {text: "which will be super useful for Ray and pretty much Ray only!!)"}
                ],
                options: [ 
                ],
                endCard: true
            }
        ]
        function showTextNode(textNodeIndex) { 
            console.log('state: ' + state);
            textElement.innerHTML = ''; // clear the text from before. 
            const textNode = textNodes.find(element => element.id === textNodeIndex); // show the text; 
            textNode.lines.forEach(line => { // for each line, place into the 
                //console.log(line); 
                //console.log(line.text); 
                textElement.innerHTML += (line.text + '<br>'); // add each line with a break between. 
            });
            
            while (optionButtonsElement.firstChild) { 
                optionButtonsElement.removeChild(optionButtonsElement.firstChild);
            }
        
            textNode.options.forEach(option => { // for each option that's given
                if(showOption(option)) { // if should be shown: 
                    const button = document.createElement('button'); 
                    button.innerText = option.text; 
                    button.classList.add('btn');
                    button.addEventListener('click', () => selectOption(option));
                    optionButtonsElement.appendChild(button);
                }
            })

            if (textNode.endCard == true) { 
                textElement.innerHTML += state.toString(2);
            }
        }
        
        function showOption(option) { 
            console.log(option.text);
            console.log("state: " + state.toString(2));
            console.log(option.requiredState);
            if (option.requiredState == null) { 
                return true; 
            }
            console.log("required state: [" + option.requiredState[0] + ", "+ option.requiredState[1]+ "]");
            console.log("1 or 0?: " + state >> (option.requiredState[0]));
            console.log(1 & (state >> (option.requiredState[0]))); 
            console.log((1 & (state >> (option.requiredState[0]))) == option.requiredState[1]);
            if ((1 & (state >> (option.requiredState[0]))) == option.requiredState[1]) { 
                console.log(option.requiredState[0]);
                console.log("1 or 0?: " + state >> (option.requiredState[0]));
                return true; 
            }
            return false; 
        }
        
        function selectOption(option) { 
            const nextTextNodeID = option.nextText; // look at next piece of text. 
            if (option.setState != undefined) { // if setState to something, add that val. 
                console.log(option.setState.toString(2))
                state = state | option.setState;
                console.log(state.toString(2));
        
            }
            console.log('Set State To: ' + state.toString(2));
            showTextNode(nextTextNodeID); 
        }
        
        function startGame() { 
            showTextNode('entry'); 
        }
        
        startGame(); 