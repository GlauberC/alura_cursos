function example3Dinnigs(){
    $('textarea').val("#Example of 3 dinning philosophers\n"+
            "# The whole system\n"+ 
            "System = [d_0, d_1, d_2, u_0_L, u_0_R, u_1_L, u_1_R, u_2_L,u_2_R]{P_2} | \({F_2} | \({P_1} | \({F_1} | \({P_0} | {F_0}\)\)\)\)\n"+
            "# Forks\n"+
            "F_0 = tau \\ u_0_R . tau \\ d_0 . { F_0} + u_0_L \\ tau . d_0 \\ tau . {F_0}\n"+
            "F_1 = tau \\ u_1_R . tau \\ d_1 . {F_1} + u_1_L \\ tau . d_1 \\ tau . {F_1}\n"+
            "F_2 = tau \\ u_2_R . tau \\ d_2 . { F_2} + u_2_L \\ tau . d_2 \\ tau . {F_2}\n"+
            "# Philosophers\n"+
            "P_0 = tau \\ think_0 . {P_0} + u_0_R \\ u_1_L . {eat_0}\n"+
            "P_1 = tau \\ think_1 . {P_1} + u_1_R \\ u_2_L . {eat_1}\n"+
            "P_2 = tau \\ think_2 . {P_2} + u_2_R \\ u_0_L . {eat_2}\n"+
            "# Eating actions\n"+
            "eat_0 = tau \\ eat_0 . {release_0}\n"+
            "eat_1 = tau \\ eat_1 . {release_1}\n"+
            "eat_2 = tau \\ eat_2 . {release_2}\n"+
            "# Release Actions\n"+
            "release_0 = d_0 \\ d_1 . {P_0}\n"+
            "release_1 = d_1 \\ d_2 . {P_1}\n"+
            "release_2 = d_2 \\ d_0 . {P_2}");
}

function examplePeterson(){
    $('textarea').val("# Peterson algorithm \n " +
        "Peterson = [b1rf, b1rt, b1wf, b1wt, b2rf, b2rt, b2wf, b2wt, kr1, kr2, kw1, kw2]{P1} | \({P2} | \({B1f} | \({B2f} | {K1}\)\)\) \n" +
        "# Turning True/False B1 \n" + 
        "B1f = tau \\ b1rf . {B1f} + \(b1wf \\ tau . {B1f} + b1wt \\ tau . {B1t}\) \n" + 
        "B1t = tau \\ b1rt . {B1t} + \(b1wf \\ tau . {B1f} + b1wt \\ tau . {B1t}\) \n" + 
        "# Turning True/False B2 \n" + 
        "B2f = tau \\ b2rf . {B2f} + \(b2wf \\ tau . {B2f} + b2wt \\ tau . {B2t}\) \n" + 
        "B2t = tau \\ b2rt . {B2t} + \(b2wf \\ tau . {B2f} + b2wt \\ tau . {B2t}\) \n" + 
        "# Values for K \n" + 
        "K1 = tau \\ kr1 . {K1} + \(kw1 \\ tau . {K1} + kw2 \\ tau . {K2}\) \n" + 
        "K2 = tau \\ kr2 . {K2} + \(kw1 \\ tau . {K1} + kw2 \\ tau . {K2}\) \n" + 
        "# Encoding of the program \n" + 
        "P1 = tau \\ b1wt . tau \\ kw2 . {P11} \n" + 
        "P11 = b2rf \\ tau . {P12} + b2rt \\ tau . \(kr2 \\ tau . {P11} + kr1 \\ tau . {P12}\) \n" + 
        "P12 = enter1 \\ tau . exit1 \\ tau . tau \\ b1wf . {P1} \n" + 
        "P2 = tau \\ b2wt . tau \\ kw1 . {P21} \n" + 
        "P21 = b1rf \\ tau . {P22} + b1rt \\ tau . \(kr1 \\ tau . {P21} + kr2 \\ tau . {P22}\) \n" + 
        "P22 = enter2 \\ tau . exit2 \\ tau . tau \\ b2wf . {P2}");
}
function exampleParallel(){
    $('textarea').val("# Interleaving execution of a\\b and c\\d possibly synchronizing\n" +
    "A = a \\ b . { B}  |  c \\ d . { B}\n" +
    "B = e \\ f . { B }\n");
}

function exampleParallelTauTransitions(){
    $('textarea').val("# tau\\tau cannot synchronize with c \\ d\n" +
    "A = tau \\ tau . { B}  |  c \\ d . { B}\n" +
    "B = e \\ f . { B }");
}
function exampleSequentialProcesses(){
    $('textarea').val("# A exhibits a\\b and finishes or it exhibits c \\ d and continues as B\n" +
    "A = a \\ b . 0 + c \\ d . { B}\n" +
    "# B loops exhibiting c \\ d\n" +
    "B = c \\ d . { B }");
}
function exampleRestrictions(){
    $('textarea').val("# In A1, a\\b may synchronize with b\\a. If a\\b reduces, then b\\a can also synchronize with e\\f\n" +
    "A1 = a \\ b . { B}  |  b \\ a . { B}\n" +
    "# In this case, a\\b must synchronize with b\\a\n" +
    "A2 = [a] a \\ b . { B}  |  b \\ a . { B}\n" +
    "B = e \\ f . 0");
}