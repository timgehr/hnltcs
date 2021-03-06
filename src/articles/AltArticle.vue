<template>
  <div class="page articlepost">
    <p class="c1 c4"><span class="c2"></span></p>
    <p class="c5"><span class="c3">Abstract</span></p>
    <p class="c1">
      <span class="c2"
        >With this report, we aim to highlight the hypotheses, experiments, and
        the results of experiments involved in teaching agents how to use
        supervised learning to predict the outcomes of Basketball games in the
        NBA. Our agents were trained using data provided by the NBA for the
        current season of 2020-2021 over 5 different players: LeBron James,
        James Harden, Damian Lillard, Luka Doncic, and Giannis Antetokounmpo. We
        attempted to find a correlation between individual player performance
        and the outcome of a given game.</span
      >
    </p>
    <p class="c5"><span class="c3">Literature Review</span></p>
    <p class="c1">
      <span class="c2"
        >Our first reference(Lin, J.; Short, L.; and Sundaresan, V. 2014) talked
        about using the statistics for NBA games between the 1991-1992 season
        and the 1997-1998 season without looking at individual player
        statistics. They approached this problem by looking at the statistics
        for a team as a whole and attempting to predict the Point Differential,
        and the Win-Loss Record and compared it to Expert Predictions. We wanted
        to see what the overall impact one player has on a team so we instead
        decided to focus on a similar approach but looking at individual player
        statistics rather than team statistics.</span
      >
    </p>
    <p class="c1">
      <span class="c2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our second source(Cai,
        Yu, Wu, Du, Zhou, 2019) focused on using historical data to train on and
        attempt to predict the outcomes of future games by weighing recent games
        more than earlier games. We felt that the scope of this project was far
        beyond our scope but it did serve as a guideline to use to see if this
        type of problem would be accurate. They achieved an accuracy of 84%,
        which was above
      </span>
    </p>
    <p class="c1 c4"><span class="c2"></span></p>
    <p class="c1 c4"><span class="c2"></span></p>
    <p class="c1">
      <span class="c2"
        >average for other approaches at around 73%, so we were able to feel
        confident that we would be able to achieve similar results with a less
        complex approach.</span
      >
    </p>
    <p class="c1">
      <span
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our third source(</span
      ><span class="c18">Symmetry</span><span>&nbsp;2020, 12(3), 431; </span
      ><span class="c13"
        ><a
          class="c10"
          href="https://www.google.com/url?q=https://doi.org/10.3390/sym12030431&amp;sa=D&amp;ust=1610260816471000&amp;usg=AOvVaw1Vp1zIn40NhtEBgsORe2bu"
          >https://doi.org/10.3390/sym12030431</a
        ></span
      ><span class="c7">) </span
      ><span class="c2"
        >focused on different methodologies that could be used to predict the
        outcome of a given basketball game. From this we were able to get a
        general understanding of which methodologies would work better than
        others when it came to this type of application. We didn&rsquo;t
        necessarily want to use only the best types according to the authors but
        instead we focused on using methods that varied from each other to see
        if the results would be noticeably different in a meaningful way.</span
      >
    </p>
    <p class="c1">
      <span class="c2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our fourth
        source(Keshri, 2019) looked at using simulating entire matches of
        basketball to simulate every aspect of a match, down to each pass and
        throw. While we knew that this was well beyond our scope as well, we
        were able to use this as proof that trying to simulate basketball match
        outcomes were possible and had solid results. Their approach looked at
        not only the team but each player on a team as well and used their data
        to simulate matchups between opposing teams. Not only did it have real
        world value but it also served to help predict results of Fantasy
        Basketball teams as well, since their model comprises teams as the sum
        and combination of all its players.</span
      >
    </p>
    <p class="c1">
      <span class="c2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our fifth
        source(Bennett, 2018) looked at using NCAA basketball data, which deals
        with the College Leagues in basketball. They determined that comparing
        normal seasons to March Madness(the championship series held in March)
        would not work due to the drastic differences in performance that can be
        easily observed. For this reason, we wanted to get more consistent data
        as this paper delved into how data can change even between years and led
        to us trying to use just one season to try to aim for consistency.</span
      >
    </p>
    <p class="c1">
      <span
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our last
        source(Perricone, J.; Shaw, I.; and Swiechowicz, W.) looked at using
        several different methods to try to predict the outcome of games using
        sklearn. This paper was helpful as it provided a baseline to help
        compare our results against since we were unable to use sklearn in this
        project. Overall, they usually got around 70% accuracy and 70% precision
        with their results, which is helpful to know as a rough estimate for how
        useful supervised learning agents can be for this type of
        scenario.</span
      >
    </p>
    <p class="c5 c4"><span class="c3"></span></p>
    <p class="c5"><span class="c3">Experiment Review</span></p>
    <p class="c1 c4"><span class="c3"></span></p>
    <p class="c1"><span class="c3">Hypothesis</span></p>
    <p class="c1">
      <span class="c2"
        >We hypothesised that Decision Trees and Multiple Linear Regression
        would both be capable of training on NBA statistics of events that
        happened during a game on a per player basis and be able to predict the
        outcome of the game. The requirements were that it would be able to take
        in the information regarding these events, and be able to accurately
        predict the outcome of the game, with a primary focus on who won the
        game and a secondary focus on what the point differential at the end of
        the game was.
      </span>
    </p>
    <p class="c1 c6">
      <span class="c2"
        >Second, we hypothesized that classification algorithms would be more
        effective at predicting outcome than prediction algorithms because we
        figured predicting discrete values was simpler on the same data set.
      </span>
    </p>
    <p class="c1 c6">
      <span class="c2"
        >Third, we hypothesized that the results would be most significant for
        Giannis Antetokounmpo because the skill gap between him and the second
        best player on his team is the highest among the 5 players chosen, which
        should mean that the statistics used to train this model should
        correlate with the outcome of the game better than any other
        players.</span
      >
    </p>
    <p class="c1 c6">
      <span class="c2"
        >Our fourth hypothesis was that removing player +/-, a statistic which
        measures the net points for that player&#39;s team when they were in the
        game, would create a significant drop off in performance for the
        learning agents because it is the only direct measure how the other team
        was scoring.
      </span>
    </p>
    <p class="c1 c6">
      <span class="c2"
        >Our final hypothesis is that training the model on one player and then
        using that model to predict outcomes for another player would greatly
        reduce the effectiveness of the model. This is because the players have
        different play styles, contribute to their teams differently, and have
        different teams around them which could hurt the effectiveness of the
        model.</span
      >
    </p>
    <p class="c1 c4"><span class="c2"></span></p>
    <p class="c1"><span class="c3">Experiments</span></p>
    <p class="c1 c6">
      <span class="c2"
        >For our first experiment, Luke implemented a Multiple Linear Regression
        model on the player data for this year&rsquo;s NBA season. Multiple
        Linear Regression is attempting to map multiple independent variables to
        a collection of points in order to determine the line of best fit and
        produce one dependent variable given a certain combination of
        independent variables. This approach was chosen since the dependent
        variable, in this case the outcome of the game, can depend on multiple
        different independent variables and how they interact with each other,
        making this approach seem like a logical approach to try to handle these
        problems.
      </span>
    </p>
    <p class="c1 c6">
      <span class="c2"
        >The statistics to train on were if it was a home game or
        not(represented as 1 or 0 respectively), the number of shots taken, the
        percentage of shots made, the number of 3-point shots attempted, the
        number of Free-throw shots attempted, the percentage of Free-throw shots
        made, the number of rebounds while on offense, the number of rebounds
        while on defense, the total number of rebounds, the number of assists,
        the number of steals, the number of blocked shots, the number of
        turnovers, the number of personal fouls, the number of points scored,
        the GmSc(which attempts to calculate how much a player contributed to
        the game), and the point differential between the two teams when the
        player was in the game.
      </span>
    </p>
    <p class="c1 c6">
      <span class="c2"
        >With this approach, a way to calculate the necessary coefficients using
        matrices seemed logical as it appeared to scale well with the number of
        independent variables. The dependent variable in this case was the point
        differential between the two teams, with a positive number representing
        that that player&rsquo;s team won and a negative number showing a loss
        for the player&rsquo;s team.
      </span>
    </p>
    <p class="c1 c6">
      <span class="c2"
        >In the second part of our first experiment, Tim implemented a Decision
        Tree Classifier using the same statistics, but this time predicting the
        outcome of the game, win or loss (1 or 0). The decision tree classifier
        turns a statistic into a decision node, splitting the data into two
        parts depending on which side of that node the data falls on. Then it
        repeats this process, creating a binary tree of decisions where each
        statistic is considered to decide which discrete outcome will occur.
        This was chosen because it is good for datasets with many attributes, of
        which our data has 18. Furthermore, the algorithm uses information gain
        to select what the most important statistic is and make the decision
        based on that. This is very significant for our sake because the number
        of blocks a player has has usually very little impact on the game,
        whereas the points they score have a massive impact on the game outcome.
        For this reason, we want an algorithm that will evaluate the most
        important statistics
        first.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
      >
    </p>
    <p class="c1 c6">
      <span class="c2"
        >In our second experiment we ran the same algorithms again and used 10
        random samples of 10 games to calculate a score out of 100 for how many
        game outcomes were correctly predicted.</span
      >
    </p>
    <p class="c1">
      <span class="c2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our third experiment
        was an assessment of the prior data, so we used the scores out of 100
        from the prior experiment to compare algorithm performance between the
        players themselves.</span
      >
    </p>
    <p class="c1">
      <span class="c2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In our fourth
        experiment, we ran the classification algorithm again without the +/-
        statistic in order to see the performance of the other statistics.</span
      >
    </p>
    <p class="c1">
      <span
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In our fifth
        experiment, we used the Multiple Linear Regression algorithm and trained
        it with data from LeBron James, then used that to predict outcomes for
        other players</span
      >
    </p>
    <p class="c5 c4"><span class="c3"></span></p>
    <p class="c5"><span class="c3">Results</span></p>
    <p class="c1">
      <span class="c2"
        >For the Multiple Linear Regression model, initially it seemed unable to
        properly train using the first sample size on LeBron James. A sample
        size of 10 was chosen at first due to the fact that our data only
        contained around 70 games for this year&rsquo;s season. Player
        performance can differ drastically between seasons so we wanted to use
        one season to try to get more consistent performance. Once the sample
        size was increased to most of the player&rsquo;s games, it was able to
        predict the overall outcome perfectly on the remaining games and got
        relatively close on the point differential(Fig 1). The results also
        showed an ability to accurately predict outliers in the data fairly well
        but struggled on data points relatively close to each other as seen in
        Figure 2 when the model attempted to predict all the results it was
        trained on. Both figures were trained on LeBron James&rsquo; game data
        for 57 of his games in the 2020-2021 season. It should also be noted
        that this model worked extremely well for LeBron James&rsquo; data and
        was the first dataset to be tested with this model.</span
      >
    </p>
    <p class="c1 c4"><span class="c2"></span></p>
    <p class="c1">
      <span
        style="
          overflow: hidden;
          display: inline-block;
          margin: 0px 0px;
          border: 0px solid #000000;
          transform: rotate(0rad) translateZ(0px);
          -webkit-transform: rotate(0rad) translateZ(0px);
          width: 288px;
          height: 157.33px;
        "
        ><img
          alt=""
          src="images/image1.png"
          style="
            width: 288px;
            height: 157.33px;
            margin-left: 0px;
            margin-top: 0px;
            transform: rotate(0rad) translateZ(0px);
            -webkit-transform: rotate(0rad) translateZ(0px);
          "
          title=""
      /></span>
    </p>
    <p class="c5"><span class="c8 c11">Figure 1</span></p>
    <p class="c5 c4"><span class="c2"></span></p>
    <p class="c5">
      <span
        style="
          overflow: hidden;
          display: inline-block;
          margin: 0px 0px;
          border: 0px solid #000000;
          transform: rotate(0rad) translateZ(0px);
          -webkit-transform: rotate(0rad) translateZ(0px);
          width: 288px;
          height: 156px;
        "
        ><img
          alt=""
          src="images/image2.png"
          style="
            width: 288px;
            height: 156px;
            margin-left: 0px;
            margin-top: 0px;
            transform: rotate(0rad) translateZ(0px);
            -webkit-transform: rotate(0rad) translateZ(0px);
          "
          title=""
      /></span>
    </p>
    <p class="c5"><span class="c8 c11">Figure 2</span></p>
    <p class="c5 c4"><span class="c2"></span></p>
    <p class="c1">
      <span class="c2"
        >However, there is no &ldquo;one-size-fits-all&rdquo; for a sample size
        across players. Performing the training with the same sample size on
        Damian Lillard&rsquo;s data for example would yield undefined numbers
        for every predicted value and be completely useless. Using a sample size
        of 10 for Damian Lillard did yield more usable results(Figure 3) that
        were not as accurate as LeBron James&rsquo; data but was still useful
        information. The reason for these undefined numbers is simply due to the
        fact that the total results of the games across the season were too
        sporadic to properly fit a linear equation and still has some issues
        with the lower sample size. A reasonable assumption from data like this
        would be that that specific player had little to no impact on the games
        as a whole since there is little correlation or that the model would
        need to be refined for each player and adjust it on an individual
        basis.</span
      >
    </p>
    <p class="c1"><span class="c2">&nbsp;</span></p>
    <p class="c1">
      <span
        style="
          overflow: hidden;
          display: inline-block;
          margin: 0px 0px;
          border: 0px solid #000000;
          transform: rotate(0rad) translateZ(0px);
          -webkit-transform: rotate(0rad) translateZ(0px);
          width: 288px;
          height: 154.67px;
        "
        ><img
          alt=""
          src="images/image3.png"
          style="
            width: 288px;
            height: 154.67px;
            margin-left: 0px;
            margin-top: 0px;
            transform: rotate(0rad) translateZ(0px);
            -webkit-transform: rotate(0rad) translateZ(0px);
          "
          title=""
      /></span>
    </p>
    <p class="c5"><span class="c8 c11">Figure 3</span></p>
    <p class="c4 c5"><span class="c2"></span></p>
    <p class="c1 c4"><span class="c2"></span></p>
    <p class="c1">
      <span class="c2"
        >After running multiple sets of 10 games for each player the results
        are:</span
      >
    </p>
    <p class="c1 c4"><span class="c2"></span></p>
    <p class="c1"><span class="c2">Giannis: 58%</span></p>
    <p class="c1"><span class="c2">Lebron: 92%</span></p>
    <p class="c1"><span class="c2">Harden: 62%</span></p>
    <p class="c1"><span class="c2">Lillard: 62%</span></p>
    <p class="c1"><span class="c2">Doncic: 54%</span></p>
    <p class="c1 c4"><span class="c2"></span></p>
    <p class="c1">
      <span class="c2"
        >For a discrete win percentage, not the point differential.</span
      >
    </p>
    <p class="c1 c4"><span class="c2"></span></p>
    <p class="c1 c6">
      <span class="c2"
        >When testing the Decision Tree Classifier, we returned predictions
        compared to their actual values. Below are two figures, showing
        predictions over 10 random games from LeBron James and Giannis
        Antetokounmpo.</span
      >
    </p>
    <p class="c1 c4"><span class="c2"></span></p>
    <p class="c1">
      <span
        style="
          overflow: hidden;
          display: inline-block;
          margin: 0px 0px;
          border: 0px solid #000000;
          transform: rotate(0rad) translateZ(0px);
          -webkit-transform: rotate(0rad) translateZ(0px);
          width: 288px;
          height: 201.33px;
        "
        ><img
          alt=""
          src="images/image5.png"
          style="
            width: 288px;
            height: 201.33px;
            margin-left: 0px;
            margin-top: 0px;
            transform: rotate(0rad) translateZ(0px);
            -webkit-transform: rotate(0rad) translateZ(0px);
          "
          title=""
      /></span>
    </p>
    <p class="c5"><span class="c8 c11">Figure 4</span></p>
    <p class="c1">
      <span
        style="
          overflow: hidden;
          display: inline-block;
          margin: 0px 0px;
          border: 0px solid #000000;
          transform: rotate(0rad) translateZ(0px);
          -webkit-transform: rotate(0rad) translateZ(0px);
          width: 288px;
          height: 201.33px;
        "
        ><img
          alt=""
          src="images/image4.png"
          style="
            width: 288px;
            height: 201.33px;
            margin-left: 0px;
            margin-top: 0px;
            transform: rotate(0rad) translateZ(0px);
            -webkit-transform: rotate(0rad) translateZ(0px);
          "
          title=""
      /></span>
    </p>
    <p class="c5"><span class="c8 c11">Figure 5</span></p>
    <p class="c5 c4"><span class="c8 c11"></span></p>
    <p class="c1">
      <span class="c2"
        >These graphs alone are not statistically significant, but after
        multiple runs of the trees over multiple sets of 10 games, the averages
        for the players were as follows:</span
      >
    </p>
    <p class="c1 c4"><span class="c2"></span></p>
    <p class="c1"><span>Giannis: </span><span>88.3%</span></p>
    <p class="c1"><span>Lebron: </span><span class="c2">76.2%</span></p>
    <p class="c1"><span class="c2">Harden: 76.2%</span></p>
    <p class="c1"><span class="c2">Lillard: 73.1%</span></p>
    <p class="c1"><span class="c2">Doncic: 58.3%</span></p>
    <p class="c1 c4"><span class="c2"></span></p>
    <p class="c1">
      <span class="c2"
        >This data was useful for 3 of our hypotheses. FIrst, it proved that the
        algorithm performs better than random chance for all players except Luka
        Doncic, who performed only slightly better than random chance, which
        confirms our first hypothesis. Second, the data compared to the results
        from the Multiple Linear Regression agent support our second hypothesis,
        which is that classification algorithms are more useful for this dataset
        than regression models based on the point differential to predict game
        outcome. It is interesting to note, however, that the regression model
        performed phenomenally on LeBron&rsquo;s data only, and no other data.
        This could be because the Lakers had a tendency to win or lose games by
        larger differentials, as the Lakers won every game where they lead at
        half time. The third takeaway from this data is that our third
        hypothesis is correct, and Antetokounmpo&rsquo;s statistics provide the
        best basis for a classification algorithm to predict team wins. In
        context, this is likely because the difference between Antetokounmpo and
        the rest of his team is the most significant among the players on this
        list, and he was voted as the NBA&rsquo;s Most Valuable Player.</span
      >
    </p>
    <p class="c1">
      <span class="c2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After running our
        fourth experiment, we established that our fourth hypothesis was
        correct.</span
      >
    </p>
    <p class="c1 c4"><span class="c2"></span></p>
    <p class="c1"><span class="c2">Giannis: 68.33333333333333</span></p>
    <p class="c1"><span class="c2">LeBron: 70.0</span></p>
    <p class="c1"><span class="c2">Harden: 56.53846153846153</span></p>
    <p class="c1"><span class="c2">Lillard: 50.76923076923076</span></p>
    <p class="c1"><span>Doncic: 55.833333333333336</span></p>
    <p class="c1 c4"><span class="c2"></span></p>
    <p class="c1 c6">
      <span
        >These results demonstrate that +/- had a massive impact on the accuracy
        of the results. This makes sense, as +/- is the only statistic which
        illustrates how the other team performed. WIthout this statistic, it
        becomes harder for the algorithm to create a decision tree that is as
        accurate, and it&rsquo;s likely that the optimal tree includes +/- as
        the root node to indicate losses are likely when the other team is able
        to outscore the players team while that player is on the court. Giannis
        and LeBron were on the two teams with the most wins in the league, so it
        makes sense that even without knowing how the other team performed, the
        model could still do a decent job of predicting the outcome of the game
        relative to the others.</span
      >
    </p>
    <p class="c1 c6">
      <span class="c2"
        >For the final hypothesis, the Multiple Linear Regression model was
        trained using LeBron James&rsquo; data as that had performed the best on
        this model. The results of testing the model on multiple sets of 10
        games for every other player resulted in an accuracy percentage of
        predicting the overall outcome of:</span
      >
    </p>
    <p class="c1 c4"><span class="c2"></span></p>
    <p class="c1"><span class="c2">Giannis: 70%</span></p>
    <p class="c1"><span class="c2">Harden: 76%</span></p>
    <p class="c1"><span class="c2">Lillard: 76%</span></p>
    <p class="c1"><span class="c2">Doncic: 46%</span></p>
    <p class="c1 c4"><span class="c2"></span></p>
    <p class="c1">
      <span
        >These results show an improvement on every player except Luka Doncic,
        who lost 8% accuracy when compared to the results from the model that
        trained on his own data, the others showed a marked improvement, which
        disproved the hypothesis for this model and showed a different
        application with better results.</span
      >
    </p>
    <p class="c5"><span class="c3">Conclusion</span></p>
    <p class="c1">
      <span class="c2"
        >Overall, the Multiple Linear Regression model was flawed for this type
        of problem. It worked very well for LeBron James but very poorly on
        other players. This was even to the extent that training the model on
        LeBron James and testing it on other players actually increased the
        accuracy percentage. It also had a much higher success rate at
        estimating the discrete win value rather than the point differential,
        which was used to try to get more accurate results. Future work
        involving this model would further refine the combination of inputs used
        in order to get more consistent results across different players. One
        stat that was not accounted for was the number of minutes played in the
        game, on account of needing to be preprocessed into a more usable form
        for every game and every player, which could also be considered as a
        factor.</span
      >
    </p>
    <p class="c1">
      <span class="c2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Decision Tree held
        up fairly well until the +/- statistic was taken away. Overall, however,
        its performance showed great promise for using this sort of method to
        not only predict what outcome a game might have given the player&rsquo;s
        statistics, but it could also show what statistics were most important
        by information gain. All of this shows significant promise to NBA
        statisticians who use this sort of information to weigh the impact of
        certain players, multiple players at a time, or the impact of certain
        facets of a player&rsquo;s game on the outcome of the game. For future
        work, what could be done is paring down statistics which don&rsquo;t
        have much impact, if any, to prevent overfitting to these statistics,
        adding more statistics that could be impactful like minutes played, and
        upgrading to a random forest classifier to diversify the decision trees
        used.</span
      >
    </p>
    <p class="c1">
      <span class="c2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The source code for
        this project can be found at
        https://github.com/LukeRule/Machine-Learning-Supervised-Learning-Long-Project</span
      >
    </p>
    <p class="c5"><span class="c3">References</span></p>
    <ol class="c15 lst-kix_gkkty78i6zs6-0 start" start="1">
      <li class="c1 c9">
        <span class="c2"
          >Lin, J.; Short, L.; and Sundaresan, V. 2014, Predicting National
          Basketball Association Winners. Technical Report, Stanford
          University.</span
        >
      </li>
      <li class="c1 c9">
        <span class="c2"
          >Weihong Cai, Ding Yu, Ziyu Wu, Xin Du, Teng Zhou,</span
        >
      </li>
    </ol>
    <p class="c1 c16">
      <span class="c2"
        >A hybrid ensemble learning framework for basketball outcomes
        prediction, Physica A: Statistical Mechanics and its Applications,</span
      >
    </p>
    <p class="c1 c16">
      <span>Volume 528, 2019, 121461, ISSN 0378-4371, </span
      ><span class="c14"
        ><a
          class="c10"
          href="https://www.google.com/url?q=https://doi.org/10.1016/j.physa.2019.121461&amp;sa=D&amp;ust=1610260816482000&amp;usg=AOvVaw1rbHzq2kmyYFU9GtV39QCz"
          >https://doi.org/10.1016/j.physa.2019.121461</a
        ></span
      ><span class="c2">.</span>
    </p>
    <ol class="c15 lst-kix_gkkty78i6zs6-0" start="3">
      <li class="c1 c9">
        <span
          >Tomislav Horvat, Ladislav Havas, Dunja Srpak, The Impact of Selecting
          a Validation Method in Machine Learning on Predicting Basketball Game
          Outcomes, </span
        ><span class="c12">Symmetry</span><span class="c17">&nbsp;2020, </span
        ><span class="c12">12</span><span class="c17">(3), 431; </span
        ><span class="c13"
          ><a
            class="c10"
            href="https://www.google.com/url?q=https://doi.org/10.3390/sym12030431&amp;sa=D&amp;ust=1610260816482000&amp;usg=AOvVaw1OQ43pIDXNzhBWQqJuNGTq"
            >https://doi.org/10.3390/sym12030431</a
          ></span
        >
      </li>
      <li class="c1 c9">
        <span class="c2"
          >Keshri, S., 2019, Essays in Basketball Analytics. Technical Report,
          Columbia University.</span
        >
      </li>
      <li class="c1 c9">
        <span class="c2"
          >Nicholas Bennett, 2018, Comparing Various Machine Learning
          Statistical Methods Using Variable Differentials to Predict College
          Basketball. Technical Report, The Dr. Gary B. and Pamela S. Williams
          Honors College.</span
        >
      </li>
      <li class="c1 c9">
        <span class="c2"
          >Perricone, J.; Shaw, I.; and Swiechowicz, W. Predicting Results for
          Professional Basketball Using NBA API Data. Technical Report, Stanford
          University.</span
        >
      </li>
    </ol>
    <p class="c1 c4 c16"><span class="c2"></span></p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>