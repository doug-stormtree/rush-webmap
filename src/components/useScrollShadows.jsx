import { useEffect, useState } from 'react';

export default function useScrollShadows(ref) {
    // store scroll ratios in state
    const [scrollTop, setScrollTop] = useState(0)
    const [scrollBot, setScrollBot] = useState(0)

    // onScroll function to convert scroll position and size to opacity ratio
    const onScroll = event => {
        const scrollMax = Math.abs(event.target.scrollHeight - event.target.clientHeight)
        setScrollTop(event.target.scrollTop / scrollMax)
        setScrollBot(
            Math.abs(
                event.target.scrollHeight
                - event.target.clientHeight
                - event.target.scrollTop
            ) / scrollMax
        )
    }

    // effect to listen to scrollBox events
    useEffect(() => {
        // save reference to scollBox for clean-up
        const scrollBox = ref?.current
        if (!scrollBox) return

        // fire onScroll once on mount so shadows show up
        onScroll({target: scrollBox})

        // add event listener and clean-up function
        scrollBox.addEventListener('scroll', onScroll)
        return () => {scrollBox.removeEventListener('scroll', onScroll)}
    }, [ref])

    // define pseudo elements for bottom and top of list shadows
    const _after = {
        content: '""',
        boxShadow: `64px 20px 24px 24px rgba(64, 64, 64, ${scrollBot})`,
        width: 'calc(100% - 128px)',
        height: '0',
        zIndex: '9',
    }
    const _before = {
        content: '""',
        boxShadow: `64px -20px 24px 24px rgba(64, 64, 64, ${scrollTop})`,
        width: 'calc(100% - 128px)',
        height: '0',
        zIndex: '9',
    }

    // return props for scrollBoxContainer
    return { _after, _before}
}