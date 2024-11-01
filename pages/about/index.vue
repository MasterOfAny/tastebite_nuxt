<template>
    <section class="about-page">
        <h1>About</h1>
        <div class="about-page__group">
            <h2>
                We’re a group of foodies who love cooking and the internet
            </h2>
            <img width="1112" height="455" src="/images/about/one.jpg" />
            <p>
                Food qualities braise chicken cuts bowl through slices butternut snack. Tender meat juicy dinners.
                One-pot low heat plenty of time adobo fat raw soften fruit. sweet renders bone-in marrow richness
                kitchen, fricassee basted pork shoulder. Delicious butternut squash hunk.
            </p>
        </div>
        <div class="about-page__simple">
            <div>
                <h2>
                    Simple, Easy Recipes for all
                </h2>
                <p>
                    Juicy meatballs brisket slammin' baked shoulder. Juicy smoker soy sauce burgers brisket. polenta
                    mustard
                    hunk greens. Wine technique snack skewers chuck excess. Oil heat slowly. slices natural delicious,
                    set
                    aside magic tbsp skillet, bay leaves brown centerpiece.
                </p>
            </div>
            <img width="571" height="466" src="/images/about/two.jpg" />
        </div>
        <div class="about-page__team">
            <h2>
                An incredible team of talented chefs and foodies
            </h2>
            <div class="team">
                <div class="team__member" v-for="member of members">
                    <img width="160" height="160" :src="member.image" />
                    <span class="team__member-name">{{ member.name }}</span>
                    <span class="team__member-position">{{ member.position }}</span>
                </div>
            </div>
        </div>
        <div class="about-page__location">
            <span>
                Operatring from NYC, Dubai and London
            </span>
            <p>
                Gastronomy atmosphere set aside. Slice butternut cooking home. Delicious romantic undisturbed raw
                platter will meld. Thick Skewers skillet natural, smoker soy sauce wait roux. slices rosette bone-in
                simmer precision alongside baby leeks. Crafting renders aromatic enjoyment.
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
const members = [
    {
        name: 'Ham Chuwon',
        position: 'Chef Extraordinaire',
        image: '/images/about/ham.png',
    },
    {
        name: 'Izabella Tabakova',
        position: 'Chef Extraordinaire',
        image: '/images/about/izabella.png',
    },
    {
        name: 'Fatima Delgadillo',
        position: 'Chef Extraordinaire',
        image: '/images/about/fatima.png',
    },
    {
        name: 'Harrison Phillips',
        position: 'Chef Extraordinaire',
        image: '/images/about/harrison.png',
    },
    {
        name: 'Pablo Cambeiro',
        position: 'Chef Extraordinaire',
        image: '/images/about/pablo.png',
    },
    {
        name: 'Corabelle Durrad',
        position: 'Chef Extraordinaire',
        image: '/images/about/corabelle.png',
    },
    {
        name: 'Nonkosi Joyi',
        position: 'Chef Extraordinaire',
        image: '/images/about/nonskoi.png',
    },
    {
        name: 'Wen Yahui',
        position: 'Chef Extraordinaire',
        image: '/images/about/wen.png',
    },
    {
        name: 'Jurrien Oldhof',
        position: 'Chef Extraordinaire',
        image: '/images/about/jurrien.png',
    },
    {
        name: 'Tallah Cotton',
        position: 'Chef Extraordinaire',
        image: '/images/about/tallah.png',
    },
    {
        name: 'Qin Shi',
        position: 'Chef Extraordinaire',
        image: '/images/about/qin.png',
    },
    {
        name: 'Su Hua',
        position: 'Chef Extraordinaire',
        image: '/images/about/su.png',
    }
]
</script>

<style scoped lang="sass">
.about-page
    grid-column: content-start / content-end
    h1
        font-family: var(--font-family-secondary)
        font-size: 60px
        line-height: 1.2
        padding-bottom: 32px
        border-bottom: 1px solid var(--color-gray-other-light)
    h2
        font-family: var(--font-family-secondary)
        font-size: 36px
        line-height: 1.22
    &__group
        margin-top: 51px
        img
            margin-top: 51px
        p
            margin-top: 39px
            font-size: 24px
            line-height: 1.58
    &__simple
        margin-top: 154px
        display: flex
        column-gap: 39px
        row-gap: 8px
        flex-wrap: wrap-reverse
        p
            margin-top: 20px
            font-size: 24px
            line-height: 1.58
    &__team
        margin-top: 128px
    .team
        margin-top: 68px
        display: grid
        grid-template-columns: repeat(auto-fill, minmax(95px, 160px))
        column-gap: 27px
        row-gap: 40px
        &__member
            display: grid
            gap: 4px
            justify-items: center
            img
                margin-bottom: 6px
        &__member-name
            font-weight: 500
            line-height: 1.5
        &__member-position
            font-size: 12px
            line-height: 1.25
            color: var(--color-gray-dark)
    &__location
        margin-top: 148px
        span
            font-weight: 600
            font-size: 20px
            line-height: 1.4
        p
            margin-top: 14px
            font-size: 14px
            line-height: 1.64
            color: #303030
            max-width: 657px
@media(max-width: 780px)
    .about-page
        h1
            font-size: 24px
            line-height: 1.54
            padding-bottom: 9px
        h2
            font-size: 22px
            line-height: 1.44
        &__group
            margin-top: 16px
            img
                margin-top: 13px
            p
                margin-top: 16px
                font-size: 14px
                line-height: 1.64
        &__simple
            margin-top: 32px
            p
                margin-top: 8px
                font-size: 14px
                line-height: 1.64
        &__team
            margin-top: 69px
        .team
            margin-top: 26px
            column-gap: 30px
            row-gap: 30px
            grid-template-columns: 1fr 1fr 1fr
            &__member
            img
                width: 95px
                height: 95px
                margin-bottom: 0
            &__member-name
                font-size: 14px
                line-height: 1.29
            &__member-position
                font-size: 10px
                line-height: 1.6
        &__location
            margin-top: 64px
            span
                font-size: 14px
                line-height: 1.29
            p
                font-size: 10px
                line-height: 1.6
@media(max-width: 480px)
    .about-page
        .team
            grid-template-columns: 1fr 1fr

</style>