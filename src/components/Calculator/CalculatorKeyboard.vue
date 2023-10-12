<template>
    <div class="calculator-keyboard h-4/5 flex flex-col gap-5">
        <CalculatorKeyboardRow>
            <CalculatorKeyboardButton>
                AC
            </CalculatorKeyboardButton>
            <CalculatorKeyboardButton>
                <font-awesome-icon :icon="['fas', 'delete-left']" />
            </CalculatorKeyboardButton>
            <CalculatorKeyboardButton>
                <font-awesome-icon :icon="['fas', 'percent']" />
            </CalculatorKeyboardButton>
            <CalculatorKeyboardButton>
                <font-awesome-icon :icon="['fas', 'divide']" />
            </CalculatorKeyboardButton>
        </CalculatorKeyboardRow>
        <CalculatorKeyboardRow>
            <CalculatorKeyboardButton>
                7
            </CalculatorKeyboardButton>
            <CalculatorKeyboardButton>
                8
            </CalculatorKeyboardButton>
            <CalculatorKeyboardButton>
                9
            </CalculatorKeyboardButton>
            <CalculatorKeyboardButton>
                <font-awesome-icon :icon="['fas', 'xmark']" />
            </CalculatorKeyboardButton>
        </CalculatorKeyboardRow>
        <CalculatorKeyboardRow>
            <CalculatorKeyboardButton>
                4
            </CalculatorKeyboardButton>
            <CalculatorKeyboardButton>
                5
            </CalculatorKeyboardButton>
            <CalculatorKeyboardButton>
                6
            </CalculatorKeyboardButton>
            <CalculatorKeyboardButton>
                <font-awesome-icon :icon="['fas', 'minus']" />
            </CalculatorKeyboardButton>
        </CalculatorKeyboardRow>
        <CalculatorKeyboardRow>
            <CalculatorKeyboardButton>
                1
            </CalculatorKeyboardButton>
            <CalculatorKeyboardButton>
                2
            </CalculatorKeyboardButton>
            <CalculatorKeyboardButton>
                3
            </CalculatorKeyboardButton>
            <CalculatorKeyboardButton>
                <font-awesome-icon :icon="['fas', 'plus']" />
            </CalculatorKeyboardButton>
        </CalculatorKeyboardRow>
        <CalculatorKeyboardRow>
            <CalculatorKeyboardButton>
                <font-awesome-icon :icon="['fas', 'plus-minus']" />
            </CalculatorKeyboardButton>
            <CalculatorKeyboardButton>
                0
            </CalculatorKeyboardButton>
            <CalculatorKeyboardButton>
                .
            </CalculatorKeyboardButton>
            <CalculatorKeyboardButton>
                <font-awesome-icon :icon="['fas', 'equals']" />
            </CalculatorKeyboardButton>
        </CalculatorKeyboardRow>
    </div>
</template>

<script>
import CalculatorKeyboardRow from '@/components/Calculator/CalculatorKeyboardRow.vue';
import CalculatorKeyboardButton from '@/components/Calculator/CalculatorKeyboardButton.vue';

    export default {
    components: { CalculatorKeyboardRow, CalculatorKeyboardButton }
}
</script>

<style lang="scss" scoped>

</style>