<html>

<body>
    <script type="text/javascript">
        $(document).ready(function() {
            var $form_exam = $('.french-exam'),
                $exercice_input = $('.french-exam .exercice-input'),
                width_for_letter_in_px = 8;

            //set size of input related to number of letter in answer
            $exercice_input.not('select').each(function() {
                var $this = $(this),
                    $answer = $(this).data('answer'),
                    $tmpSpan = $('<span/>').html($answer).css({
                        display: 'none',
                    }).appendTo('body'),
                    textWidth = $tmpSpan.width();
                $tmpSpan.remove();
                $this.width(textWidth);
            });

            // set the color to normal when student want to answer again
            $exercice_input.on('focus', function() {
                var $this = $(this);

                $this.css('color', 'black');
                $this.css('border-color', '#757575');
            });

            //check good answer
            $form_exam.on('submit', function(e) {
                e.preventDefault();

                var $this = $(this),
                    $exercice_input = $this.find('.exercice-input'),
                    number_of_answer = $exercice_input.length,
                    number_of_good_answer = 0,
                    $result = $this.find('.result');

                $result.empty();
                $result.css('color', '#7e7e7e');

                $exercice_input.each(function() {
                    var $this = $(this);
                    if ($this.val() == $this.data('answer')) {
                        $this.css('color', 'green');
                        $this.css('border-color', 'green');
                        number_of_good_answer++;
                    } else {
                        $this.css('color', 'red');
                        $this.css('border-color', 'red');
                    }
                });

                if (number_of_good_answer == number_of_answer) {
                    $result.css('color', 'green');
                }
                $result.append('nombre de bonne(s) réponse(s): ' + number_of_good_answer + '/' + number_of_answer);
            });
        });
    </script>
</body>

</html>
